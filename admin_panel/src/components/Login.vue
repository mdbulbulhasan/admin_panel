<script setup>
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Dashboard Login</CardTitle>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Input type="text" id="name" placeholder="username" />
          </div>
          <div>
            <Input type="password" id="name" placeholder="password"  />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-end px-6 pb-6">
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>/