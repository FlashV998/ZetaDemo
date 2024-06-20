import React, { useState } from 'react'
import AddSplitMembers from './components/AddSplitMembers'
import AddSplitBalance from './components/AddSplitBalance'
import AddNewGroup from './components/AddGroup'

export default function SplitWiseHome() { // this folder will contain every file for splitiwse app

    const [currentPage, setCurrentPage] = useState(1) // 1=> add balance 2=> add members and list view of splits 
    const [userName, setUserName] = useState('')
    const [newGroupName, setNewGroupName] = useState('')

    const [currentAmount, setCurrentAmount] = useState(0)

    const [currentGroup, setCurrentGroup] = useState('')
    const [currentUser, setcurrentUser] = useState('')

    const [groupStore, setGroupStore] = useState({
        "grp_1": {
            group_id: "grp_1",
            group_name: "Group 1",
            group_data: [{
                userId: `user_1`,
                userName: `Chetanya`,
                currentBalance: 0
            }]
        }
    })


    const updateAmountForGroup = (params) => {
        let currentGroupData = groupStore["grp_1"]
        let currentUserId = groupStore["grp_1"]?.group_data[0].userId

        let splitAmount = Number(currentAmount) / currentGroupData.group_data.length;

        let updatedAllMembersData = groupStore["grp_1"]?.group_data?.map((member) => { // logic for eqully splititng
            if (member.userId == currentUserId) {
                member.currentBalance = Number(member.currentBalance) + Number(currentAmount)
            }
            else {
                member.currentBalance = Number(member.currentBalance) - splitAmount
            }
        })


        let finalData = {
            ...groupStore,
            [currentGroupData?.group_id]: {
                ...currentGroupData,
                [currentGroupData?.group_data]: [...updatedAllMembersData]
            }
        }
        setGroupStore({ ...finalData })
        setCurrentPage(2)

        // if user pays differently // less time therefoe only logic is there
        // Calculate the total amount added by all members
        // let totalAmount = Object.values(currentAmounts).reduce((acc, amount) => acc + Number(amount), 0);
        // Calculate the split amount
        // let splitAmount = totalAmount / currentGroupData.group_data.length;

        // let updatedAllMembersData = currentGroupData.group_data.map((member) => {
        //     let amountPaidByMember = Number(currentAmounts[member.userId] || 0);
        //     return {
        //         ...member,
        //         currentBalance: Number(member.currentBalance) + amountPaidByMember - splitAmount
        //     };
        // });
    }

    const createNewGroup = (params) => {

    }



    const addMembers = () => {
        let currentGroupData = groupStore["grp_1"]
        let currentMembers = currentGroupData?.group_data?.length + 1
        let newMember = {
            userId: `user_${currentMembers}`,
            userName: userName,
            currentBalance: 0
        }
        currentGroupData.group_data = [...currentGroupData?.group_data,
            newMember
        ]
        let finalData = {
            ...groupStore,
            [currentGroupData?.group_id]: currentGroupData
        }
        console.log("final", finalData);
        setGroupStore({
            ...groupStore,
            [currentGroupData?.group_id]: currentGroupData
        })
        // setUserName("")
    }
    console.log("sada", userName);
    return (
        <div>
            <div style={{
                color: "blue",
                fontSize: "36px",
                width: "100%"
            }}>
                SPLITWISE APP
            </div>

            <AddNewGroup
                groupStore={groupStore}
                createNewGroup={createNewGroup}
                setNewGroupName={setNewGroupName} />


            <div style={{
                display: "flex",
                alignItems: "center",
                margin: "4rem 20rem",
                justifyContent: "space-between"
            }}>
                <div style={{ border: "1px solid cyan", borderRadius: "8px", padding: "10px 16px" }} onClick={() => {
                    setCurrentPage(1)
                }}>ADD Balance</div>
                <div style={{ border: "1px solid cyan", borderRadius: "8px", padding: "10px 16px" }} onClick={() => {
                    setCurrentPage(2)
                }}>Add Members</div>

            </div>
            {currentPage == 1 ?
                <AddSplitBalance
                    updateAmountForGroup={updateAmountForGroup}
                    setCurrentAmount={setCurrentAmount} /> : <AddSplitMembers
                    addMembers={addMembers}
                    setUserName={setUserName}
                    groupStore={groupStore} />}

        </div>
    )
}
