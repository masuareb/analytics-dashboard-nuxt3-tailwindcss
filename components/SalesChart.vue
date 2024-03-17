<template>
  <div class="mt-5">
    <p class="font-bold">Sales over time</p>
    <div class="mt-5 h-[300px] rounded-lg bg-background md:p-3">
      <Line :data="data" :options="options" />
    </div>
  </div class="mt-5">
</template>

<script setup lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData,
  } from "chart.js";
  import { Line } from "vue-chartjs";
  import colors from "#tailwind-config/theme/colors";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const mode = useColorMode();

  const options = computed<ChartOptions<"line">>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
        }
      },
      scales: {
        y: {
          grid: {
            color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
        x: {
          grid: {
            color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
      },
    };
  });

  const data = ref<ChartData<"line">>({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: 'Sales over time',
        data: [40, 39, 10, 40, 39, 80, 40],
        backgroundColor: colors.background,
        tension: 0.4,
        borderColor: colors.blue[500],
        borderWidth: 2,
        pointBackgroundColor: colors.blue[500],
      }
    ]
  })
</script>
