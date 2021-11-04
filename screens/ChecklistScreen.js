import React, { useEffect, useState } from "react"
import { View, Text, Button, TextInput } from "react-native"
import Modal from "react-native-modal"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import Card from "../components/Card"
import {
    deleteChecklist,
    getAllChecklist,
    saveChecklist
} from "../services/Services"

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
            name: onInputChange.target.value
        }

        await saveChecklist({ body }).then((res) => {
            setShowModal(!showModal)
        })
    }

    const deleteList = async (id) => {
        await deleteChecklist({ id }).then((res) => getChecklistAll())
    }

    return (
        <View style={{ padding: 20 }}>
            <View style={{alignItems: "flex-start"}}>
                <Button title="Add List" onPress={() => setShowModal(true)} />
            </View>
            <ScrollView>
                <FlatList
                    data={checklist}
                    renderItem={({ item }) => (
                        <Card
                            text={item.name}
                            id={item.id}
                            handleDelete={deleteList}
                        />
                    )}
                />
            </ScrollView>
            <Modal isVisible={showModal}>
                <View
                    style={{
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        paddingVertical: 30,
                        paddingHorizontal: 10
                    }}>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>
                        Add List
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: "#adadad",
                                borderWidth: 1,
                                paddingHorizontal: 5
                            }}
                            onChange={setOnInputChange}
                        />
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 5}}>
                            <Button
                                title="Save"
                                onPress={saveList}
                            />
                            <Button
                                title="close"
                                color="salmon"
                                onPress={() => setShowModal(!showModal)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ChecklistScreen

