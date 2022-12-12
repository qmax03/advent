const dataTest = `aabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`

const data = `abcccccccccccccccccaaaaaaaaccccccacccaaccccccccccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccaaaaa
abccccccccccccccccccaaaaacccccccaaaaaaacccccccccccaaccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccaaaaaa
abccccccccccccaaccccaaaaaacccccccaaaaaaaaccccccacaaaccaaaaaaaaaaaaaaaccccccccccccccccccaaacccccccaaaaaaaccccccccccccccccaaaccccccccccccccaaaaaa
abccccccccacccaaccccaaaaaacccccccaaaaaaaaaccccaaaaaaaaacaaaaaaaaaaaaacccccccccccccccccccaacccccccaaaaaaaacccccccccccccccaaaccccccccccccccaccaaa
abaacccccaaaaaaaccccaaaccacccccccaaaaaaaaaccccaaaaaaaaccccaaaaaaaaaaaccccccccccccccccaacaaaaaccccaaaaaaaacccccccccccccccaaacccccccccccccccccaaa
abaaccccccaaaaaaaacccccccccccccccaaaaaaaaccccccaaaaaacccccaaaacaaaaccccccccccccccccccaaaaaaaaccccccaaacaccccccccccccccccaaakccaaaccccccccccccaa
abaaacccccaaaaaaaaaccccccccccccccaaaaaaacccccccaaaaaccccccaaaccaaaaccccccccccccaacacccaaaaaccccccccaaacccccccccccccacacckkkkkkkaacccccccccccccc
abaaacccccaaaaaaaaaccccccccccccccaccaaaaaccccccaaaaaacccccaaacaaaccccccccccccccaaaaccccaaaaacccccccccccccccccccccccaaaakkkkkkkkkacccaaaccaccccc
abacacccccaaaaaaaccccccccccccccccccccaaaaaaaccccccaaccccccaaaaaaaaccccccccccccaaaaacccaaacaacccccccccccccccccccccccaajkkkkppkkkkccccaaaaaaccccc
abacccccccaaaaaaacccccccccccccccccccaaaaaaaaccccccccccccccccaaaaaaccccccccccccaaaaaacccaacccccccccccccccccccccccccccjjkkooppppkllccccaaaaaccccc
abccccccccaccaaaccccccccccccccccccccaaaaaaaacccccccccccccccccaaaaaccccccccccccacaaaacccccccccccccccccccccccccccccjjjjjjoooppppklllcacaaaaaccccc
abcccaacccccccaaacccccccccccccccccccaaaaaaacccccccccccccccccaaaaacccccccccccccccaacaccccccccccccccccccccccccccjjjjjjjjoooopuppplllcccccaaaacccc
abcccaacccccccccccccccccaaacccccccccccaaaaaaccccccaaaaacccccaaaaaccccccccccccaaacaaacccccaaaccccccccccccccccijjjjjjjjooouuuuuppllllcccccaaacccc
abaaaaaaaaccccccccccccccaaaaccccccccccaacaaaccccccaaaaaccccccccccccccccccccccaaaaaaacccccaaacacccccccccccccciijjoooooooouuuuuppplllllccccaccccc
abaaaaaaaaccccccccccccccaaaaccccccccccaacccccccccaaaaaacccccccccccccccccccccccaaaaaacccaaaaaaaacccccccccccciiiqqooooooouuuxuuuppplllllccccccccc
abccaaaaccccccccccccccccaaaccccccccccccccccccccccaaaaaacccccccccccccccccccccccaaaaaaaccaaaaaaaacccccccccccciiiqqqqtttuuuuxxxuupppqqllllmccccccc
abcaaaaacccaaaccccccccccccccccccccccccaccccccccccaaaaaacccccccccccccccccccccaaaaaaaaaaccaaaaaaccccccccccccciiiqqqtttttuuuxxxuuvpqqqqmmmmccccccc
abcaacaaaccaaacaaccccccccccccccccccccaaaacaaaccccccaacccaaaaacccccccccccccccaaaaaaaaaacccaaaaacccaaaccccccciiiqqttttxxxxxxxyuvvvvqqqqmmmmcccccc
abcacccaaccaaaaaaccccccccccccccccccccaaaaaaaacccccccccccaaaaacccccccccccccccaaacaaacccccaaaaaaccaaaacccccaaiiiqqtttxxxxxxxxyyvvvvvvqqqmmmdddccc
abcccccccaaaaaaaccccccccccccccccccccccaaaaaaaaacccccccccaaaaaaccccccccccccccccccaaaccccccaacccccaaaacccaaaaiiiqqqttxxxxxxxyyyyyyvvvqqqmmmdddccc
SbccccccccaaaaaccccccccaacaaccccccccaaaaaaaaaaccccccccccaaaaaaccccccccccccaaacccaaccccccccccccccaaaacccaaaaaiiiqqtttxxxxEzzyyyyvvvvqqqmmmdddccc
abaccccccccaaaaacccccccaaaaacccccccaaaaaaaaaaaccccccccccaaaaaaccccccccccaaaaaacccccccccccccccccccccccccaaaaaiiiqqqtttxxxyyyyyyvvvvqqqmmmdddcccc
abaacccccccaacaaaccccccaaaaaacccccccaaaaaaaaaaccccccccccccaaacccccccccccaaaaaaccccccccccccccccccccccccccaaaahhhqqqqttxxyyyyyyvvvvqqqmmmddddcccc
abaccccccccaaccccccccccaaaaaacccaacaaccaaaaaaaaaccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccaaaachhhqqtttxwyyyyyywvrqqqmmmmdddccccc
abaaaccccccccccccccccccaaaaaacccaaaaaccaaaaacaaaccccccccccccccccccccccccaaaaaccccaaaaccccaaaccccccccccccccccchhhppttwwwywwyyywwrrrnmmmdddcccccc
abaaaccccccccccccccccccccaaaccccaaaaaacaaaaaaaaaccccccccaaacccccccccccccaaaaaccccaaaaccccaaaccccccccccccccccchhpppsswwwwwwwwywwrrrnnndddccccccc
abaaacccccccccccccccccccccccccccaaaaaacccaaaaaacccccccccaaaaacccccaacccccccccccccaaaacaaaaaaaaccccccccccccccchhpppsswwwwsswwwwwrrrnneeddccccccc
abaccccccccaaaacccccccccccccccccaaaaaaccccaaaaaaaacccccaaaaaaccaacaaacccccccccccccaaccaaaaaaaaccccccccccccccchhpppssssssssrwwwwrrrnneeecaaccccc
abaccccccccaaaacccccccccccccccccccaaaccccaaaaaaaaacccccaaaaaaccaaaaaccccccccccccccccccccaaaaacccccccccccccccchhpppssssssssrrrwrrrnnneeeaaaccccc
abcccccccccaaaacccccccccccccccccccccccccaaaaaaaaaaccccccaaaaacccaaaaaacccccccccccccccccaaaaaacccccccccccccccchhpppppsssooorrrrrrrnnneeeaaaccccc
abcccccccccaaaccccccccccccccccccccccccccaaacaaacccccccccaacaacaaaaaaaacccccccccccccccccaaaaaacaaccccccccccccchhhppppppoooooorrrrnnneeeaaaaacccc
abccccccccccccccccccccccccccccccccccccccccccaaaccaaaacccccccccaaaaacaaccccaacccccccccacaaaaaacaaccccccccccccchhhgpppppoooooooonnnnneeeaaaaacccc
abcccccccaacccccccccccccccccccccccccccccccccaaacaaaaaccccccccccacaaaccccccaacccccccccaacaaaaaaaaaaacccccaaccccgggggggggggfooooonnneeeeaaaaacccc
abcccccccaaacaaccccccccccccaacccccccccccccccccccaaaaaaccccaacccccaaacccaaaaaaaaccccccaaaaacaaaaaaaaccccaaacccccggggggggggfffooonneeeecaaacccccc
abcccccccaaaaaaccccaacccccaaacccccccccccccccccccaaaaaaccccaaaccccccccccaaaaaaaacccccccaaaaaccaaaaccccaaaaaaaacccggggggggfffffffffeeeecaaccccccc
abcccccaaaaaaaccaaaaacaaaaaaacccccccccccccccccccaaaaacccccaaaacccaaccccccaaaacccccccaaaaaaaacaaaaacccaaaaaaaaccccccccccaaaffffffffecccccccccccc
abcaaacaaaaaaacccaaaaaaaaaaaaaaaccccccccccccccccccaaacccccaaaacaaaacaacccaaaaaccccccaaaaaaaaaaaaaaccccaaaaaacccccccccccaaacaafffffccccccccccaaa
abaaaacccaaaaaaccaaaaacaaaaaaaaaccccccccccccaaacccccccccccaaaaaaaaacaaccaaacaacccccccccaacccaaccaaccccaaaaaaccccccccccaaaaccaaacccccccccccccaaa
abaaaacccaacaaacaaaaacccaaaaaaacccccccccccccaaaacccccccccaaaaaaaaaaaaaccaacccacccccccccaacccccccccccccaaaaaaccccccccccaaacccccccccccccccccccaaa
abcaaacccaacccccccaaaccaaaaaacccccccccccccccaaaaccccccaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaccaaccccccccccaaaccccccccccccccccaaaaaa
abcccccccccccccccccccccaaaaaaaccccccccccccccaaacccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaa`

module.exports = {
    data,
    dataTest
}