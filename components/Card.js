import React from "react"
import { View, Text, Button, CheckBox } from "react-native"

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
                marginTop: 10,
                flex: 1,
                justifyContent: "space-between"
            }}>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <CheckBox onValueChange={() => props.handleCheckbox(props.id)} />
                    <Text style={{ marginLeft: 8 }}>{props.text}</Text>
                </View>
                <Button title="Delete" color="salmon" onPress={() => props.handleDelete(props.id)} />
        </View>
    )
}

export default Card
