import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedWriter temp = new BufferedWriter(new OutputStreamWriter(System.out));
		temp.write("|\\_/|");
		temp.newLine();
		temp.write("|q p|   /}");
		temp.newLine();
		temp.write("(" + " 0 " + ")\"\"\"\\");
		temp.newLine();
		temp.write("|\"^\"`    |");
		temp.newLine();
		temp.write("||_/=\\\\__|");
		
		temp.flush();
		temp.close();
	}

}