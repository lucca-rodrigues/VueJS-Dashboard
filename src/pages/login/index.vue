<template>
  <c-box minH="50rem" align="center" bg="blue.800">
    <c-box pt="15rem" w="100%" align="center" justify="center" >
      <c-box w="30%">
        <c-input type="email" placeholder="E-mail" h="3rem"/>
      </c-box >
      <c-box mt="3" w="30%">
        <c-input-group size="md">
          <c-input
            pr="4.5rem"
            :type="show ? 'text' : 'password'"
            placeholder="Enter password"
            v-model="password"
          />
          <c-input-right-element width="4.5rem">
            <c-button @click="show = !show">
              {{ show ? 'Hide' : 'Show' }}
            </c-button>
          </c-input-right-element>
        </c-input-group>
      </c-box>      
      <c-box mt="3" w="30%">
        <c-button variant-color="blue" variant="outline" size="lg">Button</c-button>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'PasswordInput',
  data () {
    return {
      password: 'kurama<3naruto',
      show: false
    }
  }
}
  // export default {
  //   name: 'login',
  //   data () {
  //     return {
  //       property: {
  //         password: 'kurama<3naruto',
  //         show: false
  //       }
  //     }
  //   }
  // }
</script>
<style scoped>

</style>