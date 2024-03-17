<template>
  <div>
    <!-- Header -->
    <Header />
    <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
      <!-- Sidebar -->
      <Sidebar class="hidden lg:col-span-3 lg:block"/>

      <!-- Main Section -->
      <main class="py-5 lg:col-span-6">
        <!-- Status cards -->
        <StatusCard />

        <!-- Customer list -->
        <NewCustomers />

        <!-- Sales Chart -->
        <SalesChart />

        <!-- Recent orders -->
        <RecentOrders />
      </main>
      <div class="hidden py-5 lg:cols-span-3 lg:block">
        <!-- Profile info -->
        <ProfileInfo />

        <!-- Reminders -->
      </div>
    </div>
  </div>
</template>
