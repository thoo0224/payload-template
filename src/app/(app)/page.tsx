import { Button } from "@/components/ui/button"
import { getPayloadInstance } from "@/server/payload"

export default async function Page() {
  const payload = await getPayloadInstance()
  const { docs: users } = await payload.find({
    collection: "users",
  })

  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <span key={user.id}>{user.email}</span>
      ))}
    </div>
  )
}
