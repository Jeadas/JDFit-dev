const { test, expect } = require('@playwright/test');

test.describe('JDFit Workout Flow', () => {
  
  test('should load the home page and show workout plans', async ({ page }) => {
    await page.goto('./');
    
    // Prüfen, ob der Titel korrekt ist
    await expect(page).toHaveTitle(/JDFit/);
    
    // Prüfen, ob Trainingspläne angezeigt werden
    const planCards = page.locator('.plan-card');
    await expect(planCards).toHaveCount({ min: 1 });
  });

  test('should navigate through a workout', async ({ page }) => {
    await page.goto('./');
    
    // Ersten Plan auswählen
    await page.locator('.plan-card').first().click();
    
    // Prüfen, ob wir auf der Pre-Workout Seite sind
    await expect(page.locator('text=Start Workout')).toBeVisible();
    
    // Workout starten
    await page.click('text=Start Workout');
    
    // Prüfen, ob die erste Übung angezeigt wird
    await expect(page.locator('.exercise-name')).toBeVisible();
    
    // Ersten Satz abschließen
    await page.click('#complete-set-btn');
    
    // Prüfen, ob der Timer startet
    await expect(page.locator('#timer-display')).toBeVisible();
  });

  test('should open settings and check export button', async ({ page }) => {
    await page.goto('./');
    
    // Einstellungen öffnen
    await page.click('#settings-btn');
    
    // Prüfen, ob der Export-Button da ist
    await expect(page.locator('#export-btn')).toBeVisible();
  });
});
