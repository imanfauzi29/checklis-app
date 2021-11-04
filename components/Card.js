import React from "react"
import { View, CheckBox, Text } from "react-native"

function Card(props) {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                borderRadius: 5,
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: "row",
                marginTop: 10
            }}>
            <CheckBox onValueChange={() => props.handleCheckbox(props.id)} />
            <Text style={{ marginLeft: 8 }}>{props.text}</Text>
        </View>
    )
}

export default Card
