import java.util.HashSet;

public class PangramChecker {
    public static boolean isPangram(String input) {
        // Convert the input to lowercase to make the comparison case-insensitive
        input = input.toLowerCase();
        HashSet<Character> alphabetSet = new HashSet<>();
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.add(c);
            }
        }
        return alphabetSet.size() == 26;
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
