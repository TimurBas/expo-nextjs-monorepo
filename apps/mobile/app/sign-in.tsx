import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authClient } from "../lib/auth/auth-client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email({
      email,
      password,
    });
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleLogin} />
    </View>
  );
}
