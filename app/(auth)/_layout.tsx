import { Stack } from "expo-router";
import React from "react";
import "../globals.css";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="welcome" options={{ headerShown: false }} />
		</Stack>
	);
};

export default Layout;
