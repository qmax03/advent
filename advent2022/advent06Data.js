const dataTest = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`

const data = `srjsssgppnssqzszmzjmjdmmqwqcwqccslsjswjssgbsgsnggqtqnnjznndtndnhddfldfdsfswsjsjjptjpttlwlccpnpgngcncnscncsnnwrwmwggsgdgssvbsstzsstqqrjqqlsqlsqscschhclhccznzcnnzzqppjbpjjqzzbwbqqzdqdjjqtjtbtgtqgtgdgwwsjjbwjjzssrsvsttgqtgglgplgpllcrcncssbrbgrbrllsqlsltthshrrnddwzdzdbbrppdvdqvvpvdvdsslbbmnbnjjrdrnntzzftzftttrsshpspvvrzzqzwzhzszbzjjwqwvqqglgflfwfrfprpddfvdffhzztwtppwwwztzsznzmnnbvbbtqqdhqdqdfffnjnmnlmljmlmnlnddzbbdgdqdnqqtjjtnthttvwwtrwwwgffqcfchfcfwcczhhgjhghpgpwgwffhghzghhtftntnnmlnmlmddqbbfwbfwbwvvfssrggptpltpllbcbzczzlccjgcgvcczjzvvvdtvdvqdqwdqdvdjvddjfdjjqmmfgfsftfzfwzwzfftmfmmqdqccjqcqwwflwlccpssvzzzbnbjnbjjgtgpttbwbrbwrwvrrwccgrgrvvpjvvznvvhddtdldpldppmlplltdllhqhpqhqqbpptgpgjgqjgjffvfdvdttsrsllhzlzrrdrnrjrddqbbjrrvrsstgsttjqjhjbhhnmndmmnrmnnrggmtgmmhshjjfqjjtqtstpstppggtzzrsrwwqffvzvzvqqggqsqtstszttpvtvvvddcncvncvchhnsnpsnnlmnnmqnqjjfwfccmwmbwbswbswwghhzrrptptbbjbtjjgdjgjrgrwgwlglblbnlnbbwnnpbnbmbtmtvvhjjlwlhhszslldwlwdllhjhghqghhqpplhhtjhhnhqhlhjhmmlhlmmrpptvvcczfcccwgcccpgpspdpccfhchffbjbzzwppfbbstbtltpllcssnnctnnqcqhhclhccvlvlffnjjwbwfbfttwvvdvnnnsrstrtmtfthtzzcvzvhzzpmpfpmmmwggdbdqdbbjnbbdqbbrnnnprrwbbcwbbpjjprjjzzvwwvrrthhqvhvnhhzmzszrszsjssclcjjbhjbhjbhjbjhhzbbzttnrnssrbrjbrjjmsmffdlflfzfbzzmtztdthdhldhlddnccgbbmtbbsbzsbzzcsszpzfffprfpfzfrzzhvhffsmmqtjwgjbzhnmrslrmgfjpqcllcgsjdhrshqtlgmqqtfmswfzwtnrswtzdjzclcfmltqgdhcsgvzrdltgfbtqclpppvbqnbqmlhmdbsjbwbdllzpnrwfhmnlgvdwsdjsznnhqzhwntjvcpzdrfwmwwdrttdvzspmbmqggmlmsvwgcjgpvcmplqwfjgpghnfpbctnfhcgngcbdmzhlpcnjpmczzsgfgrdftrzgvmmpdmgcrpcdrjsgczpfjnwpdjpntdngdjwctvcbsjmfwvtsrlhvpswppmfwrwzsbsgbjvljzqjjldmnqnmwsmqnmhmqhhttppbpqlvdcvdbhmbnjzztjrdjdzlvmbdrghtftwdpcwwblsjbgnzwtpztmtmnrpsvzfzncqmrvhcbqcvqvnlngdcllrqlbhjttnmjmhfhdzmjmplcfdqpmwblzsnmpczwcnggcwdvgnjcrrtmpwwqdqpvtbzpdbfnbfcfllntqjlslcsznjvzvsbntrtzwhcbtdmbmwttvhdvdtvrcmprcrrjlgsqddrsmwsrbtbpjrmlbrnsdrjfhjnqjtgjmhzjbjnprvmhtjcdbztwqmrlfflfmcslshtwmwhgvbdslgjhzjlglhllsdphlzngjfwfrlwpnqfhghnqhzhgrszbcwjvlrtmshntszsqplvfbccjwctgtfmqgqjdlgdbwhgvctqtcgfdwvqdwqzddmsbrpftzpqztgzbnplvhftmgpdthnrdhqbltbrmhpcqsfccmqzwmrbnbgbjspslwpjhdqspssqdtnssmjmvzwwfstgzzjrmfczdlznwqpdhbsjqddvffcgfhfdqdrlwcsgcsszdtpqbbsthpwbhdfzmgmcdggfcwcmzfjnfbzbccjhvwhbwfslnqnrwhgrwtlnmrmncnjtbjbdlmqsczppgbcmsdrwlrpjbgrmnhqqfhhsdhmdmpvvpjrnzsvzctmqhpzcvcjfgtlfvqvnvlnprmgrsvrrvtjfndqfsvqdsfbcwlbglmfhfhcfgqdfmclnzhdtppgzzsqgjqncqrbdhlhdjqwjpmbdnfmgdgwbwmnlngnmrhcgqwzvmbjzdvsspjwwdtpnvpftdlqlzfgtscfczsvbrtrqqpgqlvmrtddqplbzsswbgpdzpqfvqpqbndblghmdhmnctdnjbgglmrlvmrmsfgntfdwvqcvvlvbcnwrctvjqhmnsjqccwltbfqpqpmwsfvmnnfqmlmlcchqcdtbvqwcpptvfwrwtbdrlsgnwpmjgnwlprzqjlwqmtmjglbrzlgfbsghwqdmwhrcmfwdmzmflsbngtgndftdpzsqvgqdsfdhplmfcmwpbtvcdmpghmfwqjvhdhfpmbrqpvnbhlftgdtprlztrgnlcldfpjqjqdfrvqtcnzrtjcgzgsslzghlnfhwwjwzdsmpsczclrfmnqjvfmvsqpntsnnnlrfswqtrppzhqgjzlzvrrbhhfhchhvgztpgctcsgssvttszsrdwzwrbmwmspgqhmmfnzqqdbmnbltdmrsvqgddltwczbbjcmplncspgqgmzrndhttsrbvqbpbvhshfqrpqgmmdbhmmtccjcmntmpqhrvhnfnlqqbctsnfzjbphhqwmztgbhqqlbctbsfcszbggzrlcdhwddtjgtqhppzgjsqcddwjsngjrcdflmgwgfnzhjtcwgbqvpwmpgcpdwvqgswwfzcnjgmdpffmqczmsqgpthpmsjlwnrcbzrfshvwftzllwrmfccmlpjnmpjdfpcvjgjpznllmqjwpcflgqgdljtbbjvjlvhhmtvzfnjfnnwrvtlfdbhqphrjghtmlsrplqscsnvjvqdslsbsfzzrjfmchplzgjgdqvzhfphvsjfvnqlgmjfzhrdlmmvfntnzdvrnwqshsmtjnqmwzgpbbzszrsqcvlzjwnmgjhmfqrbvgmfqpswctmvpfcghvdqgstglmzvpfhzfzvhqqdmvrvrttlpwwhqgddzqlrvvdffqtznvlfgjhhmvbmtzjqnnhqzrtbzpqcwpngrdcndcgzwhzgtfwbmwbrpvvczczhwcqwsqzqbqvqftcswtcbzdbpccjhtwbpnwlwwwqwscptlwshrdbmmdcgrmpnnwgjwzszwwdwctfspbfqvdjqtrflshrqlbfgpnrmbszwjpcdzbggphgplcgvwljprzmtncsvfwqchttndhpnzmtdvtjqtcsddtqvcmztmjgwqvjhflrjjtnvfpjrnlvzvwvrpbhrzslmrqqzqhnzqnvtqppmncddphbwwsjczmphsrlltzndtqjgdlqgpnlfcvwntstmrgcrjzmmllpwldnwmwzpvzctmhszspcvtgnqthszzsmtdnzwtfddfctpjhscbqgwfpqmzpvqrzvtbrdjzrqprdgbpmzzfbgqcvcdtsfrffcpqwtvdwvtcqlcsdrzntgrhrspznndslmnvptlphpdqgbblfhmgbpmmfwqzlhvzshhpzgfjldqclngbcbrmmnqqvqmwdnjsglsggqfgjldqfbsqgtrwmpdffqlcwwlfhlpqfgwtssnjwzhgvtwqzmhmgwzwmcggmpmrzqrcsmflqsrbnzvdmjcdbnscstqrqhvddsbjpzwsvzswqhcqmgzlvfcnzjrrffzphmrvdbhqbrwpsfqvfqwhqhcgfvfsfttzcdsrjgjwcgvhllszmplmvgczqsbfldnbvrnqccbprjjdwhmqpdjjrnfdlhzdvlfmrldjlqclbjrrtjfsflphzdcdpfpr`

module.exports = {
    data,
    dataTest
}