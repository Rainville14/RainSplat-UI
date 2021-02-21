<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <h1 class="display-1 mt-5 mb-3">Heading Level 1</h1>
            <h2 class="headline mt-5 mb-2">Heading Level 2</h2>
            <h3 class="title mt-3 mb-1">Heading Level 3</h3>
            <h4 class="subtitle-2">Heading Level 4</h4>
            <p
              class="body-1"
            >This is body level 1 text that should be used for the majority of free-form text in the application. It can be used to describe a section, or as product details within the product selection section.</p>
            <p class="body-2">This is body level 2 text and should be used for disclosures and such.</p>
            <h1>Heading Level 1</h1>
            <p
              class="body-1"
            >This is body level 1 text that should be used for the majority of free-form text in the application. It can be used to describe a section, or as product details within the product selection section.</p>
            <h2>Heading Level 2</h2>
            <p
              class="body-1"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit magnam provident cupiditate qui officia, odit maxime laboriosam aliquid assumenda excepturi molestiae enim minima, modi cumque libero reiciendis nihil earum.</p>
            <h3>Heading Level 3</h3>
            <p
              class="body-1"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid fuga exercitationem iste, doloribus magnam dolorem praesentium voluptate nisi quos soluta atque harum! Sint quod cum illum, sit ea et?</p>
            <h4>Heading Level 4</h4>
            <p
              class="body-1"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quibusdam praesentium, tenetur quidem accusamus iusto facilis quia quisquam est alias doloribus voluptatibus libero explicabo repellat unde quo, iure, facere officiis!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quibusdam praesentium, tenetur quidem accusamus iusto facilis quia quisquam est alias doloribus voluptatibus libero explicabo repellat unde quo, iure, facere officiis!</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card :outlined="true">
              <v-card-title>Form Fields</v-card-title>
              <v-card-text>
                <v-text-field v-bind="FormInputs.TextField" label="Text Field" />
                <v-text-field v-bind="FormInputs.TextField" type="password" label="Password" />
                <v-select v-bind="FormInputs.Select" :items="FormOptions.states" label="Select" />
                <v-textarea v-bind="FormInputs.TextArea" label="Text Area" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card :outlined="true">
              <v-card-title>Buttons</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-btn v-bind="FormInputs.Button" class="primary">Primary</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn v-bind="FormInputs.Button" class="secondary">Normal</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn v-bind="FormInputs.Button" color="error">Error</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn v-bind="FormInputs.Button" disabled>Disabled</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({}),
  components: {},
  computed: mapState({
    FormInputs: (state) => state.config.Forms.FormInputs,
    FormOptions: (state) => state.config.Forms.FormOptions,
  }),
  methods: {
    ...mapActions(),
  },
};
</script>