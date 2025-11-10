# DCST1002-Prosjekt


## Git-kommandoer
```bash
# henter ned alle endringer fra github
git pull 

# gjør alle nye filer/endringer klart til å bli synkronisert med github
git add --all

# forteller hvilke endringer som er gjort med "melding"
git commit -m "melding"

# sender endringer til github-repo, på branch main
git push origin main

```

## Problemer med git pull request osv.
Hvis git ikke greier å merge lokale endringer og versjonen på github må man ofte opprette en ny lokal branch og pushe denne til github. 

Deretter må du manuelt merge branchene inne på github-nettsiden.

Følgende kommandoer oppretter en ny branch, bytter til denne branchen, og laster den opp til github
```bash
git checkout -b navn_på_branch #endre dette til f.eks. navnet ditt

git add --all
git commit -m "endringer"
git push origin navn_på_branch #dette skal være samme navn som du nettopp opprettet

```
Etter at du har skrevet kommandoene, gå inn på github og merge branchene, og slett den gamle når det er gjort.

Deretter må du bytte tilbake til main branchen, hente ned endringer, og slette den gamle lokale branchen.
```bash
git switch main                #bytter til main
git pull                       #hent alle endringer fra github

git branch -d navn_på_branch   #dette skal være navnet på branchen du opprettet for å merge
```
