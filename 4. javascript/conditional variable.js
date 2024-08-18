// Data kandidat Presiden
const candidates = [
    { name: 'Joe Biden', party: 'Democratic', age: 78 },
    { name: 'Donald Trump', party: 'Republican', age: 74 },
];

// Data hasil pemilihan dari berbagai negara bagian
const electionResults = [
    { state: 'California', votes: 11000000, candidate: 'Joe Biden' },
    { state: 'Texas', votes: 9500000, candidate: 'Donald Trump' },
    { state: 'Florida', votes: 5100000, candidate: 'Joe Biden' },
    { state: 'New York', votes: 6800000, candidate: 'Joe Biden' },
    { state: 'Ohio', votes: 3000000, candidate: 'Donald Trump' },
    { state: 'Pennsylvania', votes: 3300000, candidate: 'Joe Biden' },
    { state: 'Georgia', votes: 2500000, candidate: 'Donald Trump' },
];

// Fungsi untuk memfilter kandidat berdasarkan partai
function filterCandidatesByParty(party) {
    return candidates.filter(candidate => candidate.party === party);
}

// Fungsi untuk menghitung total suara yang diperoleh setiap kandidat
function calculateTotalVotes() {
    return candidates.map(candidate => {
        const totalVotes = electionResults
            .filter(result => result.candidate === candidate.name)
            .reduce((acc, result) => acc + result.votes, 0);
        return { ...candidate, totalVotes };
    });
}

// Menghitung hasil total suara
const totalVotesByCandidate = calculateTotalVotes();

// Menentukan pemenang
const winner = totalVotesByCandidate.reduce((max, candidate) => {
    return candidate.totalVotes > max.totalVotes ? candidate : max;
}, totalVotesByCandidate[0]);

// Output hasil pemilihan
console.log('Hasil Pemilihan Presiden:');
totalVotesByCandidate.forEach(candidate => {
    console.log(`${candidate.name} dari partai ${candidate.party} memperoleh ${candidate.totalVotes} suara`);
});

console.log(`Pemenang Pemilihan Presiden adalah ${winner.name} dengan ${winner.totalVotes} suara`);

// Contoh penggunaan filterCandidatesByParty
const democraticCandidates = filterCandidatesByParty('Democratic');
console.log('Kandidat dari Partai Demokrat:', democraticCandidates);