<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import NavItems from "@/components/NavItems.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ref } from 'vue'

const position = ref('bottom')
</script>

<template>
  <nav class="mt-1 p-1 md:p-8 w-full h-20 flex justify-between items-center rounded-md shadow-sm">
      <div class="flex items-center gap-4">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" class="lg:hidden">
              <font-awesome-icon :icon="['fas', 'bars']" class="text-xl cursor-pointer lg:hidden flex" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-full">
            <NavItems/>
          </SheetContent>
        </Sheet>
        <h1 class="lg:flex hidden text-2xl font-semibold text-[rgba(0,0,0,0.6)]">Dashboard</h1>
      </div>

    <div class="flex justify-between gap-3 text-2xl">
    <ul class="lg:flex hidden gap-10  text-2xl text-[rgba(0,0,0,0.6)]">
      <li class="flex gap-1 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'chart-simple']" />
        <a href="" class="hover:text-red-600 hover:font-semibold">Stats</a>
      </li>
      <li class="flex gap-1 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'bell']" />
        <a href="" class="hover:text-red-600 hover:font-semibold">Notifications</a>
        <button class="flex gap-1 justify-center items-center">
          <font-awesome-icon :icon="['fas', 'caret-down']" class="text-xs" />
        </button>
      </li>
      <li class="flex gap-1 justify-center items-center">
        <font-awesome-icon :icon="['fas', 'gear']" />
        <a href="" class="hover:text-red-600 hover:font-semibold">Settings</a>
      </li>
    </ul>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" class="lg:hidden">
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
<!--          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>-->
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">
              Stats
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">
              Notifications
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">
              Settings
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
  <hr class= "bg-white h-0.5"/>
</template>

<style>

</style>