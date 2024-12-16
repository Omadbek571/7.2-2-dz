import React, { useState } from 'react'

function ToDoList() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [info, setInfo] = useState([])


    function handleName(e) {
        setName(e.target.value)
        // console.log(name);

    }

    function handleAge(e) {
        setAge(e.target.value)
        // console.log(age);

    }

    function handleAdd() {
        setInfo([...info, { name, age }])
        // console.log(info);

        setAge("")
        setName("")
    }

    function handleDel(index) {
        const updatearr = info.filter(function (value, i) {
            return i !== index
        })
        setInfo(updatearr)

    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h1 className="text-2xl font-bold text-center mb-4">ToDo List</h1>
                <input
                    onChange={handleName}
                    value={name}
                    type="text"
                    placeholder="Enter name..."
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    onChange={handleAge}
                    value={age}
                    type="text"
                    placeholder="Enter age..."
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAdd}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                    ADD
                </button>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-5">
                <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
                <h2 className="text-xl font-semibold text-gray-800">Age: {age}</h2>
            </div>

            <div>
                {
                    info.length > 0 && info.map(function (value, index) {
                        return (
                            <div key={index} className="p-4 bg-white rounded-lg shadow-md mb-4 mt-5">
                                <h2 className="text-xl font-semibold text-gray-800">Name: {value.name}</h2>
                                <h2 className="text-xl font-semibold text-gray-800">Age: {value.age}</h2>
                                <button
                                    onClick={() => handleDel(index)}
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default ToDoList