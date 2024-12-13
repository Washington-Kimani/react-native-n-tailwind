import { Text, View, TouchableOpacity, Linking, FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from 'axios'
import '@/global.css';

export default function Index() {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(()=>{
    async function fetchUsers(){
      setLoading(true)
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(result.data);
        setLoading(false)
      } catch ({error}: any) {
        setError(error.message);
      }
    }

    fetchUsers()
  },[]);
  if(loading){
    return(
      <View className="flex-1 flex-col items-center justify-center bg-green-300">
        <Text className="text-blue-600">Loading users...</Text>
      </View>
    )
  }
  if(error){
    return(
      <View className="flex-1 flex-col items-center justify-center bg-green-300">
        <Text className="text-blue-600">{error}</Text>
      </View>
    )
  }

const UserCard = ({ user }: any) => (
  <View key={user.id} className="w-[98%] p-4">
    <View className="max-w-[90%] rounded-lg overflow-hidden mx-auto shadow-lg bg-white">
      {/* User Info */}
      <View className="p-4">
        <Text className="text-2xl font-semibold text-gray-800">
          {user.name}
        </Text>
        <Text className="text-sm text-gray-600">{user.username}</Text>
        <Text className="text-sm text-gray-600">{user.email}</Text>
      </View>

      {/* Address Section */}
      <View className="bg-gray-100 p-4">
        <Text className="font-semibold text-lg text-gray-700">Address</Text>
        <Text className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite}
        </Text>
        <Text className="text-sm text-gray-600">
          {user.address.city}, {user.address.zipcode}
        </Text>
        <Text className="text-sm text-gray-600">
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </Text>
      </View>

      {/* Contact Section */}
      <View className="bg-gray-50 p-4">
        <Text className="font-semibold text-lg text-gray-700">Contact</Text>
        <Text className="text-sm text-gray-600">Phone: {user.phone}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://${user.website}`)}
        >
          <Text className="text-sm text-blue-500">Website: {user.website}</Text>
        </TouchableOpacity>
      </View>

      {/* Company Section */}
      <View className="bg-gray-100 p-4 rounded-b-lg">
        <Text className="font-semibold text-lg text-gray-700">Company</Text>
        <Text className="text-sm text-gray-600">Name: {user.company.name}</Text>
        <Text className="text-sm text-gray-600">
          Catchphrase: {user.company.catchPhrase}
        </Text>
        <Text className="text-sm text-gray-600">BS: {user.company.bs}</Text>
      </View>
    </View>
  </View>
);

  return (
    <View className="flex-1 items-center justify-center  bg-green-300">
      <View className="w-[95] mx-auto flex-1 items-center justify-center bg-emerald-600">
        <FlatList
          data={users} // Your array of users
          keyExtractor={(item) => item.id.toString()} // Unique key for each user
          renderItem={({ item }) => <UserCard user={item} />} // Render the card for each user
          showsVerticalScrollIndicator = {false}
        />
      </View>
    </View>
  );
}
