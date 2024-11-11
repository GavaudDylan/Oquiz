-- Démarre une transaction
-- Transaction = lie les commandes : si l'une rate, alors les autres sont rollback également.
BEGIN;

-- On veut ajouter un champ role dans notre table user 
ALTER TABLE "user" ADD "role" TEXT NOT NULL DEFAULT 'member';

-- On va update l'utilisateur chuck@oclock.io histoire d'avoir au moins 1 admin
UPDATE "user" SET "role" = 'admin' WHERE "email" = 'chuck@oclock.io';

-- Termine la transaction
COMMIT;
