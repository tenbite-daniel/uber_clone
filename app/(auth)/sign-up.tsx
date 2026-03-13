import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onSignUpPress = async () => {};
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
							Create Your Account
						</Text>
					</View>
					<View className="p-5">
						<InputField
							label="Name"
							placeholder="Enter Name"
							icon={icons.person}
							value={form.name}
							onChangeText={(value) =>
								setForm({ ...form, name: value })
							}
						/>
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
							title="Sign Up"
							onPress={onSignUpPress}
							className="mt-5"
						/>
						{/* OAuth */}
						<OAuth />
						<Link
							href="/sign-in"
							className="text-lg text-center text-general-200 mt-10"
						>
							<Text className="">Already have an account? </Text>
							<Text className="text-primary-500">Log In</Text>
						</Link>
						{/* Verification Modal */}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
