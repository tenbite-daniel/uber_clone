import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSignInPress = async () => {};
	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				<View className="flex-1 bg-white">
					<View className="relative w-full h-[250px]">
						<Image
							source={images.signUpCar}
							className="w-full h-[240px] z-0"
						/>
						<Text className="absolute text-black font-JakartaSemiBold text-2xl ml-5 mb-2 bottom-5 left-5">
							Welcome
						</Text>
					</View>
					<View className="p-5">
						<InputField
							label="Email"
							placeholder="Enter Your Email"
							icon={icons.email}
							value={form.email}
							onChangeText={(value) =>
								setForm({ ...form, email: value })
							}
						/>
						<InputField
							label="Password"
							placeholder="Enter Password"
							icon={icons.lock}
							value={form.password}
							secureTextEntry={true}
							onChangeText={(value) =>
								setForm({ ...form, password: value })
							}
						/>
						<CustomButton
							title="Sign In"
							onPress={onSignInPress}
							className="mt-5"
						/>
						{/* OAuth */}
						<OAuth />
						<Link
							href="/sign-up"
							className="text-lg text-center text-general-200 mt-10"
						>
							<Text className="">Don't have an account? </Text>
							<Text className="text-primary-500">Sign Up</Text>
						</Link>
						{/* Verification Modal */}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
