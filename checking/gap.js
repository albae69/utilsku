import React from 'react';
import { View } from 'react-native';

const Gap = ({ b, t, l, r }) => {
    return (
        <View
            style={{
                marginTop: t,
                marginBottom: b,
                marginLeft: l,
                marginRight: r,
            }}
        />
    );
};

export default Gap;
