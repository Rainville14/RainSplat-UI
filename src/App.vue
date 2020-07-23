<template>
	<v-app>
		<Loading />
		<!--<NavDrawer :drawer="drawer" />-->

		<!-- Sizes your content based upon application components -->
		<v-content>
			<!-- Provides the application the proper gutter -->
			<v-container>
				<v-app-bar flat="flat">
					<v-toolbar-title class="headline text-uppercase">
						<router-link to="/" aria-label="Homepage">
							Home
						</router-link>
					</v-toolbar-title>
				</v-app-bar>
				<router-view />
			</v-container>
		</v-content>

		<v-footer app></v-footer>
	</v-app>
</template>

<script>
import Loading from "./components/common/Loading";

export default {
	name: "App",
	components: {
		Loading
	},
	computed: {
	}
};
</script>
