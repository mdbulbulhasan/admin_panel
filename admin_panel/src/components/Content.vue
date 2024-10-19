<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Chart from "@/components/Chart.vue";
</script>
<template>
  <section class="w-full p-4 overflow-auto h-[85vh]">
<!-- First Row   -->
    <div class="lg:flex">
      <div class="flex m-5 justify-center lg:pr-0 pr-8 items-center w-full">
        <Card class="h-full lg:p-[6.5rem] md:p-[6.5rem] p-3 flex flex-col justify-center items-start shadow-black shadow-sm">
          <CardContent>
            <div class="flex items-center gap-10 text-[rgba(0,0,0,0.75)]">
              <font-awesome-icon :icon="['fas', 'database']" class="text-8xl text-yellow-500" />
              <div class="text-xl lg:pl-10">
                <p class="flex justify-end mb-2">Capacity</p>
                <h1 class="text-5xl">105GB</h1>
              </div>
            </div>
          </CardContent>
          <div class="flex gap-3 justify-start items-center text-[rgba(0,0,0,0.6)]">
            <font-awesome-icon :icon="['fas', 'rotate']" />
            <p>Upgrade Now</p>
          </div>
        </Card>
      </div>
      <div class="flex m-5 justify-center lg:pr-0 pr-8 items-center w-full">
        <Card class="h-full lg:p-[6.5rem] md:p-[6.5rem] p-3 flex flex-col justify-center items-start">
          <CardContent>
            <div class="flex justify-evenly items-center gap-10 text-[rgba(0,0,0,0.75)]">
              <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" class="text-8xl text-green-600" />
              <div class="text-xl lg:pl-10">
                <p class="flex justify-end mb-2">Revenue</p>
                <h1 class="text-5xl">$1.345</h1>
              </div>
            </div>
          </CardContent>
          <hr>
          <div class="flex gap-3 justify-start items-center text-[rgba(0,0,0,0.6)]">
            <font-awesome-icon :icon="['fas', 'calendar']" />
            <p>Last Day</p>
          </div>
        </Card>
      </div>
    </div>
    <!--   Second Row   -->
    <div class="lg:flex">
      <div class="flex m-5 justify-center lg:pr-0 pr-8 items-center w-full">
        <Card class="h-full lg:p-[6.5rem] md:p-[6.5rem] p-3 flex flex-col justify-center items-start">
          <CardContent>
            <div class="flex justify-evenly items-center gap-28 text-[rgba(0,0,0,0.75)]">
              <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="text-8xl text-red-500" />
              <div class="text-xl lg:pl-10">
                <p class="flex justify-end mb-2">Error</p>
                <h1 class="text-5xl">23</h1>
              </div>
            </div>
          </CardContent>
          <hr>
          <div class="flex gap-3 justify-start items-center text-[rgba(0,0,0,0.6)]">
            <font-awesome-icon :icon="['fas', 'bell-concierge']" />
            <p>In the last hour</p>
          </div>
        </Card>
      </div>
      <div class="flex m-5 justify-center lg:pr-0 pr-8 items-center w-full">
        <Card class="h-full lg:p-[6.5rem] md:p-[6.5rem] p-3 flex flex-col justify-center items-start">
          <CardContent>
            <div class="flex justify-evenly items-center gap-[4.5rem] text-[rgba(0,0,0,0.75)]">
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-8xl text-blue-400" />
              <div class="text-xl lg:pl-10">
                <p class="flex justify-end mb-2">Followers</p>
                <h1 class="text-5xl">+45</h1>
              </div>
            </div>
          </CardContent>
          <hr>
          <div class="flex gap-3 justify-start items-center text-[rgba(0,0,0,0.6)]">
            <font-awesome-icon :icon="['fas', 'rotate']" />
            <p>Update Now</p>
          </div>
        </Card>
      </div>
    </div>
<!--    Third Row-->
    <div class="lg:w-[96%] lg:h-[97%] lg:ml-6 lg:p-0 md:w-[66%] md:h-[48%] md:ml-[17.5%] md:p-0 w-[97%] h-[78%] mt-4 ml-2 bg-white rounded-lg" >
        <Chart/>
    </div>

  </section>
</template>