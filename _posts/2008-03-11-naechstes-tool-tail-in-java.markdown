---
title: "Nächstes Tool: Tail in Java"
date: 2008-03-11 00:00:00
layout: post
---
Tja, schon wieder ein neues kleines Tool: Ich hab gerade tail in Java nachgebaut.
Für alle, die unter Windows sowas ähnliches suchen. 😉 Den Quelltext gibt es im
vollständigen Artikel.

Als nächstes sind noch das Einlesen von STDIN geplant und die Angabe der
auszugebenden Bytes per Parameter. Vorschläge bitte wieder in die Kommentare. 😀

<!--more-->

<pre class="brush: java">
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;

public class Tail {

        /**
         * Application version.
         */
        private static final String VERSION = "0.1";

        /**
         * Default number of bytes to show.
         */
        private static final int DEFAULT_LENGTH = 100;

        public static void tail(String filename) throws IOException {
                File f = new File(filename);
                if(!f.exists()) throw new FileNotFoundException();

                RandomAccessFile file = new RandomAccessFile(f);
                if(file.length() > DEFAULT_LENGTH) {
                        file.seek(file.length() - DEFAULT_LENGTH);
                }
                //go back to last n
                long newPos = file.getFilePointer();
                while(file.read() != 'n') {
                        file.seek(newPos);
                        newPos = file.getFilePointer() - 1;
                }
                // display file
                ByteBuffer buf = ByteBuffer.allocate(DEFAULT_LENGTH * 2);
                int length = -1;
                while((length = file.getChannel().read(buf)) != -1) {
                        System.out.print(new String(buf.array()).trim());
                }
        }

        public static void main(String[] args) {
                if(args.length == 0) {
                        System.out.println("tail v" + VERSION);
                        System.out.println("USAGE: tail");
                } else {
                        try {
                                Tail.tail(args[0]);
                        } catch (IOException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                        }
                }
        }

}
</pre>
