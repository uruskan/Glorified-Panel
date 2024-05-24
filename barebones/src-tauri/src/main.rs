// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
static mut isLoggedIn: bool = false;
#[tauri::command]
fn is_logged_in() -> bool {
    unsafe { return isLoggedIn; }
}
#[tauri::command]
fn login(userName : &str, userPassword : &str) -> bool {
   
    // If the password is correct, return true
    // If the password is incorrect, return false
   
    if userName == "admin" && userPassword == "admin" {
        unsafe { isLoggedIn = true; }
        return true;
    }else {
        return false;
    }
    return false;
}
#[tauri::command]
fn logout(){
    unsafe { isLoggedIn = false; }
    println!("Logged out");
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login, is_logged_in, logout])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
