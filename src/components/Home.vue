<template>
  <div id="home" class="min-h-screen">
    <div class="flex justify-center">
      <!-- vertical line -->
      <div class="mt-10">
        <div class="bg-black w-[1px] h-[96px]"></div>
      </div>
    </div>

    <!-- heading -->
    <div class="py-10">
      <h1 class="text-center text-8xl">
        & Data Scientist<br />
        Data Analyst
      </h1>
    </div>

    <!-- lower box -->
    <div class="m-10">
      <!-- grid view -->
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-5 p-2">
          <div class="my-5">Know me batter</div>
          <div class="grid grid-cols-[2fr_1fr] border-b-2 border-gray-400">
            <div class="border-t-2 border-r-2 border-gray-400">
              <div class="">
                <h4 class="text-3xl py-5 me-5 border-b-2 border-gray-400">
                  About me
                </h4>
                <p class="my-5 me-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam eius iste corrupti asperiores voluptatem vero!
                  Perspiciatis repudiandae reprehenderit libero modi recusandae
                  a voluptatibus, repellendus quas natus nulla soluta. Nobis,
                  odio!
                </p>
              </div>
            </div>
            <div class="border-t-2 border-r-2 border-gray-400 p-5">
              <img
                src="../assets/image-2.png"
                alt="project"
                class="rounded-lg drop-shadow-xl"
              />
              <h3 class="text-3xl font-bold mt-5">Projects.</h3>
            </div>
          </div>
        </div>

        <div class="col-span-2 p-2">
          <div class="">
            <img
              src="../assets/image.png"
              alt=""
              class="rounded-lg drop-shadow-xl mx-auto"
            />
            <div class="mt-5">
              <div class="flex justify-between">
                <div>name</div>
                <div>class</div>
              </div>
              <div class="text-center font-semibold">+ Data Analyst +</div>
            </div>
          </div>
        </div>

        <div class="col-span-5 p-2">
          <div class="mb-5 text-3xl font-bold">Skills.</div>
          <div class="grid grid-cols-[1fr_2fr] border-b-2 border-gray-400">
            <div class="border-t-2 border-l-2 border-gray-400 p-5">
              <img
                src="../assets/resume.png"
                alt="project"
                class="rounded-lg drop-shadow-xl"
              />
              <h3 class="text-3xl font-bold mt-5">Resume</h3>
            </div>
            <div class="border-t-2 border-l-2 border-gray-400">
              <div class="">
                <h4 class="text-3xl py-5 ms-5 border-b-2 border-gray-400">
                  About me
                </h4>
                <p class="my-5 ms-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam eius iste corrupti asperiores voluptatem vero!
                  Perspiciatis repudiandae reprehenderit libero modi recusandae
                  a voluptatibus, repellendus quas natus nulla soluta. Nobis,
                  odio!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
