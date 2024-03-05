/*
 *class: Modern Art
 *
 *description: This class prints a design based on Piet Mondrian's work 
 *
 *@author Ryan Thompson
 */

public class modArt
{
  public static void main(String[] args)
  {
  String topBottom = "-";
  byte count = 0;
  String nl = "\n";

  //title 
  System.out.println(nl + nl + nl + "                   Modern Art!");

  //top border
  while(count < 50){System.out.print(topBottom);count++;}

  //body
  System.out.println(nl +
    "|                |" + "                         " + "|     |" + nl +
    "|                |" + "                         " + "|     |" + nl + 
    "|                |" + "                         " + "|     |" + nl +
    "|------------------------------------------|     |" + nl +
    "|                                " + "|   |     |-----|" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl +
    "|                                " + "|   |     |     |" + nl + 
    "|                                |   |     |     |" + nl +
    "|-------------------------------------     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                     |     |" + nl +
    "|                    |                 ----------|" + nl +
    "|                    |                 |         |" + nl +
    "|                    |                 |         |" + 
  "");

  //bottom border 
  count = 0;
  while(count < 50){System.out.print(topBottom);count++;}
  System.out.println(nl + nl + nl);
  }
}