'use strict';

/* eslint-disable no-console */

console.log(`

 =================                                                    ====
 ==================                                                   ====
   =====      ======
   =====       =====
   =====       =====        =========          =========  ======    ======    =======  =========
   =====      =====       =============       ==================    =======   ======= ===========
   ===============       =====     =====     ======    =========    =======   ===========  =======
   ===============      =====       =====   =====        =====        =====     =======      =====
   =====     =======   ==================   =====        =====        =====     ======       =====
   =====       ======  ==================   =====        =====        =====     =====        =====
   =====        =====  =====                =====        =====        =====     =====        =====
   =====        =====   =====               =====        =====        =====     =====        =====
   =====       ======   ======       ==      ======     ======        =====     =====        =====
   =================     ===============      ================  ====  =======   =====        =======
   ===============         ==============      ===============  ====  =======   =====        =======
    ==========                =======                    =====  ====   ======   =====          =====
                                                         =====
                                              ==       ======
                                              ==============
                                              ============

`.replace(/(=+)/g, '\x1b[42m$1\x1b[0m').replace(/=/g, ' '));
