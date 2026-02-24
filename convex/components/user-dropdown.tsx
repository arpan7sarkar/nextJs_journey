"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOut } from "./sign-out";

export function UserDropdown({
	name,
	email,
	pictureUrl,
}: {
	name?: string;
	email?: string;
	pictureUrl?: string;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-none">
				<Avatar>
					<AvatarImage src={pictureUrl} />
					<AvatarFallback>
						{name?.charAt(0) || email?.charAt(0)}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[240px]">
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<SignOut />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
