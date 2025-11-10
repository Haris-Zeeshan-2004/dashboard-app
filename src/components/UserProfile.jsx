import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UserProfile = () => {
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        bio: "",
    })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            const mockUser = {
                fullName: "Haris Zeeshan",
                email: "haris@example.com",
                bio: "Hello! I am a frontend developer.",
            }
            setProfile(mockUser)
            setLoading(false)
        }, 1000)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {
        setSaving(true)
        setTimeout(() => {
            localStorage.setItem("profile", JSON.stringify(profile))
            toast.success("Profile saved successfully!")
            setSaving(false)
        }, 1500)
    }

    if (loading) return <p className="text-center mt-10">Loading profile...</p>

    return (
        <>
            <Card className="max-w-md w-full mx-auto mt-8 p-4 shadow-md">
                <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Full Name</label>
                        <Input
                            type="text"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <Input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Bio</label>
                        <Textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            placeholder="Tell something about yourself"
                        />
                    </div>


                    <Button onClick={handleSave} disabled={saving} className="w-full">
                        {saving ? "Saving..." : "Save"}
                    </Button>
                </CardContent>
            </Card>

            <ToastContainer />
        </>
    )
}

export default UserProfile
