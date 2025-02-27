import { getRecords } from '@/api/record';
import { getUserId } from '@/utils/user.storage';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HistoryTable = () => {

    const [userId, setUserId] = useState<string>('')
    const [historyData, setHistoryData] = useState()

    useEffect(() => {
        const fetchUserId = async () => {
            const userid = await getUserId();
            setUserId(userid);
        };

        fetchUserId();
    }, []);

    useEffect(() => {

        if (userId) {

            const fetchRecords = async () => {
                const records = await getRecords(userId);
                setHistoryData(records);
            };

            fetchRecords();

            const intervalId = setInterval(fetchRecords, 5000);

            return () => clearInterval(intervalId);
        }
    }, [userId]);

    const renderItem = ({ item }: any) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.className}</Text>
            <Text style={styles.cell}>{item.dateTime}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>History</Text>
                <Text style={styles.headerText}>Today</Text>
            </View>
            <FlatList
                data={historyData}
                renderItem={renderItem}
                keyExtractor={(item) => item.className}
                style={styles.table}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 5,
        borderRadius: 5,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopWidth: 3,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    table: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        padding: 5,
    },
});

export default HistoryTable;
