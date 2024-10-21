<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const isClicked = ref(false);
const  router = useRouter();
async function SubmitHandler(e) {
  e.preventDefault();
  isClicked.value = true;
  // Input Binding
  const formData = new FormData();
  formData.append('username', e.target.name.value);
  formData.append('password', e.target.password.value);
  try {
    const response = await axios.post(`https://dummyjson.com/auth/login`,formData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response.data);
    if (response.status === 200) {
      isClicked.value = false;
      await router.push('/AdminPanel');
    }
  }
  catch (error) {
    console.log(error);
  }

}
</script>

<template>
  <Card class="lg:w-[600px] md:w-[50%] w-[90%] bg-gray-300 shadow-black shadow-lg lg:p-14">
    <CardHeader>
      <CardTitle>Admin Login</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit="SubmitHandler">
        <div class="grid items-center w-full gap-4">
          <div>
            <Input class="pl-2 !border-none !focus:outline-none !focus:ring-0" type="text" id="name" name="name" placeholder="username" />
          </div>
          <div class=" border-none focus:outline-none focus:ring-0">
            <Input class="pl-2 " type="password" id="password" name="password" placeholder="password"  />
          </div>
          <div class="flex w-full justify-end">
            <Button class="w-[20%] text-lg hover:bg-gray-400 hover:text-black rounded-2xl md:p-6" type="submit">{{isClicked ? "Loading" : "Login"}}</Button>
          </div>

        </div>


      </form>
    </CardContent>
  </Card>
</template>/