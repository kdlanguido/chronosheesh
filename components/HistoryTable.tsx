import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HistoryTable = () => {
    const data = [
        { id: '1', history: 'History 1', today: 'Class 1' },
        { id: '2', history: 'History 2', today: 'Class 2' },
        { id: '3', history: 'History 3', today: 'Class 3' },
    ];

    const renderItem = ({ item }: any) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.history}</Text>
            <Text style={styles.cell}>{item.today}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>History</Text>
                <Text style={styles.headerText}>Today</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
        textAlign: 'center',
        padding: 5,
    },
});

export default HistoryTable;
