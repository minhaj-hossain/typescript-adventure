import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {}, firebaseConfig.firestoreDatabaseId || "(default)");

export interface WizardProgress {
  xp: number;
  unlockedBadges: string[];
  unlockedLevels: string[];
  levelCodes: Record<string, string>;
  wizardTitle: string;
}

// Save or sync wizard progress with the cloud
export async function saveWizardProgress(userId: string, progress: WizardProgress): Promise<void> {
  const userDocRef = doc(db, "wizards", userId);
  await setDoc(userDocRef, progress, { merge: true });
}

// Load wizard progress from the cloud
export async function getWizardProgress(userId: string): Promise<WizardProgress | null> {
  const userDocRef = doc(db, "wizards", userId);
  const snap = await getDoc(userDocRef);
  if (snap.exists()) {
    return snap.data() as WizardProgress;
  }
  return null;
}

// Update specific level code
export async function saveLevelCodeCloud(userId: string, levelId: string, code: string): Promise<void> {
  const userDocRef = doc(db, "wizards", userId);
  const fieldPath = `levelCodes.${levelId}`;
  await updateDoc(userDocRef, {
    [fieldPath]: code
  });
}

export { app, auth, db };
