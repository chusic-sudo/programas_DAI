/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package password;

import java.util.Date;
import java.util.Random;
import java.util.Scanner;
import java.util.GregorianCalendar;

/**
 *
 * @author chusic
 */
public class Password {
    private int longitud;
    String contrasenya;

    public Password(int longitud) {
        this.longitud = longitud;
        this.contrasenya = generarContrasenya (longitud);
    }
    
    public Password ()
    {
        this.longitud = 8;
        this.contrasenya = generarContrasenya (longitud);
        
    }
    
    public boolean esForta (String contrasenya)
    {
        int compt_maj = 0;
        int compt_min = 0;
        int compt_num = 0;
        
        for (int i = 0; i < contrasenya.length (); i++) {
            if (contrasenya.charAt(i) >= 'a' && contrasenya.charAt (i) <= 'z') {
                compt_min ++;
            }
            else if (contrasenya.charAt(i) >= 'A' && contrasenya.charAt (i) <= 'Z') {
                compt_maj++;
            }
            else if (contrasenya.charAt (i) >= '0' && contrasenya.charAt (i) <= '9') {
                compt_num ++;
            }
            
        }
        
        return (compt_maj >= 2 && compt_min >= 1 && compt_num >= 5);
    }
    
    private String generarContrasenya (int longitud)
    {
        Random car = new Random ();
        Random tipus = new Random ();
        int c = 0;
        
        String resultat = "";
        
        for (int i = 0; i < longitud; i++) {
            // Si tipus == 0 seran números
            // Si tipus == 1 seran lletres minúscules
            // Si tipus == 2 seran lletres majúscules
            
            switch (tipus.nextInt(3)) {
                case 0:
                    c = (car.nextInt (10) + 48);
                    break;
                case 1:
                    c = (car.nextInt (26) + 65);
                    break;
                case 2:
                    c = (car.nextInt (26) + 97);
                    break;
            }
            
            resultat += Character.toString((char) c);
        }
        
        return resultat;
    }

    public int getLongitud() {
        return longitud;
    }

    public void setLongitud(int longitud) {
        this.longitud = longitud;
    }

    public String getContrasenya() {
        return contrasenya;
    }

    public void setContrasenya(String contrasenya) {
        this.contrasenya = contrasenya;
    }
    

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner entrada = new Scanner (System.in);
                
       
        
       int num_passwords;
       int long_passwords;
       
        System.out.println("Introdueix el número de passwords que vols crear? ");
        num_passwords = entrada.nextInt ();
        System.out.println("longitud? ");
        long_passwords = entrada.nextInt ();
        
        Password pass [] = new Password [num_passwords];
        
        for (int i = 0; i < pass.length; i++) {
            pass[i] = new Password (long_passwords);
            System.out.println("Password " + i + ": " + pass [i].getContrasenya());
            
        }
        
       /* System.out.println("Tornem a generar passwords amb bucle for--each: ");
        
        for (Password p: pass) {
            p.setContrasenya (p.generarContrasenya(long_passwords));
            System.out.println("Password: " + p.getContrasenya());
        }*/
    
        
    }
    
}
