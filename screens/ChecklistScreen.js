import React, { useEffect, useState } from "react"
import { View, Text, CheckBox, Button, TextInput, ToastAndroid } from "react-native"
import Modal from "react-native-modal"
import { FlatList } from "react-native-gesture-handler"
import Card from "../components/Card"
import { getAllChecklist, saveChecklist } from "../services/Services"

function ChecklistScreen() {
    const [checklist, setChecklist] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [onInputChange, setOnInputChange] = useState(null)

    const getChecklistAll = async () => {
        const { data } = await getAllChecklist().then((res) => res)
        setChecklist(data)
    }

    useEffect(() => {
        getChecklistAll()
    }, [])

    const saveList = async () => {
        const body = {
            "name": onInputChange.target.value
        }

        const save = await saveChecklist(body).then(res => console.log(res))
    }

    return (
        <View style={{ padding: 20 }}>
            <View>
                <Button title="Add List" onPress={() => setShowModal(true)} />
            </View>
            <Modal isVisible={showModal}>
                <View
                    style={{
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        paddingVertical: 30,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{fontSize: 16, marginBottom: 5}}>Add List</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "gray",
                                borderWidth: 1
                            }}
                            onChange={setOnInputChange}
                        />
                        <Button
                            title="Save"
                            style={{marginLeft: 5}}
                            onPress={saveList}
                        />
                        <Button title="close" style={{marginLeft: 5, backgroundColor: "salmon"}} onPress={() => setShowModal(!showModal)} />
                    </View>
                </View>
            </Modal>
            <FlatList
                data={checklist}
                renderItem={({ item }) => (
                    <Card text={item.name} id={item.id} />
                )}
            />
        </View>
    )
}

export default ChecklistScreen
