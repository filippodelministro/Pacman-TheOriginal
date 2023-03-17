# THE ORIGNALS
## Tre dei giochi più famosi degli anno '80
    - SNAKE
    - PACMAN
    - TETRIS

--- 
#### Struttura
    header      //su menu e su menu di gioco
        - theoriginal   (sx)    -> manda alla home
        - playerbar     (dx)    -> account

    account
        - nickname [pswd]
        - description
        - gameinfo per ogni gioco
            - points avg
            - best of
            - match played

    home       //menu dei giochi: si sceglie a cosa giocare
        - SNAKE
        - PACMAN
        - TETRIS
        - classifiche generali

        game    //menu di gioco
            - classifiche
            - comandi       [personalizzabili]
            - istruzioni
            - storia    ??

---

#### Layout
Account unico
Classifiche parziali e generali

Layout semplice e retro arcade: per tutti il CSS è lo stesso,
ma si cambia colore

    SNAKE                   -> verde
    PACMAN                  -> giallo
    TETRIS                  -> azzurro
    
    Classifiche generali    -> rosso

---  
