import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { UserDropdown } from "./user-dropdown";

export default async function UserDetails() {
	const user = await fetchQuery(
		api.users.currentUser,
		{},
		{ token: await convexAuthNextjsToken() }
	);

	if (!user) {

		return null;
	}

	return (
		<UserDropdown
			name={user.name?.charAt(0) || user.email || "Guest"}
			email={user.email}
			pictureUrl={user.image || user.picture}
		/>
	);
}
