import React from 'react'

export default function AddNewGroup({
    groupStore,
    createNewGroup,
    setNewGroupName
}) {
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => {
                    setNewGroupName(e.target.value)
                }} />
                <div style={{ border: "1px solid green", borderRadius: "8px", padding: "10px 16px", width: "fit-content" }}
                    onClick={() => {
                        createNewGroup()
                    }}>Create New Group</div>
            </div>
            <div>All Groups - Let's Split</div>
            <ul>{Object.keys(groupStore).map((grpId) => {
                let groupD = groupStore[grpId]
                return <li style={{ margin: "10px 20px" }}>
                    <div style={{ border: "1px solid cyan", borderRadius: "8px", padding: "2px 6px", width: "fit-content" }}>
                        {groupD?.group_name}
                    </div>
                </li>
            })}
            </ul>
        </div>
    )
}
