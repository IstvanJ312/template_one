import useSocialAuth from "@/hooks/useSocialAuth";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isAppleClicked = loadingStrategy === "oauth_apple";
  const isGitHubClicked = loadingStrategy === "oauth_github";

  const isLoading = isAppleClicked || isGitHubClicked || isGoogleClicked;

  return (
    <SafeAreaView className="flex-1 " edges={["top"]}>
      {/* Decorative elements*/}
      <View className="absolute -left-16 top-12 h-56 w-56 rounded-full " />
      <View className="absolute right-[-74px] top-40 h-72 w-72 rounded-full" />

      <View className="mt-8 flex-1 rounded-t-[36px]  px-6 pb-8 pt-6">
        <View className="self-center rounded-full  px-3 py-1">
          <Text className="text-xs font-semibold uppercase tracking-[1px] ">
            Welcome Back
          </Text>
        </View>

        <Text className="mt-2 text-center text-sm leading-6 ">
          Choose a social provider and jump right into your personalized
          shopping experience
        </Text>

        <View className="mt-6 ">
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border px-4 active:opacity-90 
              ${isLoading ? "opacity-70" : ""}`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_google")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full">
              <Image
                source={require("@/assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <Text className={`ml-3 flex-1 text-lg font-semibold `}>
              {isGoogleClicked
                ? "Connecting Google..."
                : "Continue with Google"}
            </Text>

            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border px-4 active:opacity-90 
              ${isLoading ? "opacity-70" : ""}`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_apple")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full ">
              <FontAwesome name="apple" size={24} color="#111" />
            </View>

            <Text className={`ml-3 flex-1 text-lg font-semibold  `}>
              {isAppleClicked ? "Connecting Apple..." : "Continue with Apple"}
            </Text>

            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl border px-4 active:opacity-90 
               ${isLoading ? "opacity-70" : ""}`}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_github")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full ">
              <FontAwesome name="github" size={24} color="#111" />
            </View>

            <Text className={`ml-3 flex-1 text-lg font-semibold  `}>
              {isGitHubClicked
                ? "Connecting GitHub..."
                : "Continue with GitHub"}
            </Text>

            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>
        </View>
        <Text className="mt-3 text-center text-sm leading-5">
          By continuing, you agree to our terms of service and privacy policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}
