<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" class="py-8 text-center">
        As R.Jerome has embraced celibacy and left his love life behind. We get
        to vote for his next love of his life among a few handpicked candidates
        by the Pope.
      </v-col>
    </v-row>

    <v-row class="mb-4" justify="center">
      <v-col cols="12">
        <div class="text-h3 text-center">Handpicked Candidates</div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="candidate in listOfCandidates"
        :key="candidate.id"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            :src="require('@/assets/charlene.jpg')"
          >
            <v-card-title class="text-h5">Charlene Lionel</v-card-title>
            <v-card-subtitle>Votes: {{ candidate.VoteCount }}</v-card-subtitle>
          </v-img>

          <v-card-subtitle class="pb-0">
            Candidate {{ candidate.id }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Nationality: {{ candidate.Nationality }}</div>

            <div>{{ candidate.Description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text @click="onClickVote(candidate.id)">
              Vote for this candidate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <NewCandidateDialog />
  </div>
</template>

<script>
import {
  collection,
  doc,
  increment,
  onSnapshot,
  updateDoc,
} from '@firebase/firestore';
import { firestore9 } from '@/plugins/firebase';
import NewCandidateDialog from './NewCandidateDialog.vue';

export default {
  components: { NewCandidateDialog },
  data: () => ({
    destroyListOfCandidatesSnapshot: null,
    listOfCandidates: [],
  }),
  methods: {
    async onClickVote(candidateId) {
      const candidateRef = doc(firestore9, 'candidates', candidateId);

      await updateDoc(candidateRef, {
        VoteCount: increment(1),
      });
    },
  },
  created() {
    this.destroyListOfCandidatesSnapshot = onSnapshot(
      collection(firestore9, 'candidates'),
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        this.listOfCandidates = data;
      },
    );
  },
  destroyed() {
    this.destroyListOfCandidatesSnapshot();
  },
};
</script>

<style></style>
