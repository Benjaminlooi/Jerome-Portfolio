<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" class="py-8 text-center"
        >As R.Jerome has embraced celibacy and left his love life behind. We get
        to vote for his next love of his life among a few handpicked candidates
        by the Pope.</v-col
      >

      <v-col cols="12"
        ><div class="text-h3 text-center">Handpicked Candidates</div></v-col
      >
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-img
            class="white--text align-end"
            :src="require('../assets/charlene.jpg')"
          >
            <v-card-title class="text-h5">Charlene Lionel</v-card-title>
            <v-card-subtitle>Votes: {{ voteCount }}</v-card-subtitle>
          </v-img>

          <v-card-subtitle class="pb-0"> Candidate Number 1 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Nationality: Malaysian</div>

            <div>Charlene Lionel is R.Jerome's first love</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text @click="onClickVote(1)">
              Vote for this candidate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getDatabase, onValue, ref, runTransaction } from "firebase/database";

export default {
  data: () => ({
    voteCount: 0,
  }),
  methods: {
    onClickVote(candidateId) {
      const db = getDatabase();
      const starCountRef = ref(db, "candidate/" + candidateId + "/voteCount");

      runTransaction(starCountRef, (voteCount) => {
        if (voteCount) {
          voteCount++;
        }
        return voteCount;
      });
    },
  },
  created() {
    const db = getDatabase();
    const starCountRef = ref(db, "candidate/" + 1 + "/voteCount");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      this.voteCount = data;
    });
  },
};
</script>

<style></style>
