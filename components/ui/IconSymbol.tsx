// This file is a fallback for using MaterialIcons on Android and web.

import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, Platform } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  'house.fill': Platform.OS === 'ios' ? 'home' : 'home', // Use 'home' icon for both platforms
  'paperplane.fill': Platform.OS === 'ios' ? 'send' : 'send', // Use 'send' icon for both platforms
  'timer.circle': Platform.OS === 'ios' ? 'timer.circle' : 'access-time', // iOS uses 'history', Android uses 'access-time'
  'chevron.left.forwardslash.chevron.right': Platform.OS === 'ios' ? 'code' : 'code', // Using 'code' for both
  'chevron.right': Platform.OS === 'ios' ? 'chevron-forward' : 'chevron-right',

  // Add qrcode.viewfinder mapping here
  'qrcode.viewfinder': Platform.OS === 'ios' ? 'qrcode' : 'qr-code-scanner', // iOS uses 'qrcode', Android uses 'qr-code'
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
