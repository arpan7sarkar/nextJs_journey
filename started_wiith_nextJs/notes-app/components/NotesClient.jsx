"use client";
import React, { useState } from "react";

const NotesClient = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const createNote = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) return;

        setLoading(true);
        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, content })
            });
            const data = await response.json();
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <div className="space-y-6">
            <form onSubmit={createNote} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Create new Note
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 text-gray-700"
                        required
                    />
                    <textarea
                        placeholder="Note Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 text-gray-700"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
                    >
                        {loading ? "Creating ..." : "Create Note"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NotesClient;

