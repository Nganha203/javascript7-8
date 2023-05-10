let mang = [];
document.getElementById('btnMang').onclick =
function (){
    var dulieu = Number(document.getElementById('iso').value);
    mang.push(dulieu);
    document.getElementById('ketqua').innerHTML = mang;
}

// TINH TONG SO DUONG
document.getElementById('btnTong_duong').onclick = 
function Sum(){
    var sum = 0;
    var am = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] > 0){
            sum += mang[i];
        }
        else{
            am = mang[i];
        }
    }
    document.getElementById('Tong_so_duong').innerHTML = sum;
}

// DEM SO DUONG
document.getElementById('btnDem_duong').onclick = 
function soduong(){
    var sum = 0;
    var am = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] > 0){
           sum += mang[i]/mang[i];
        }
        else{
           am = mang[i];
        }
    }
    document.getElementById('Dem_so_duong').innerHTML = sum;
}

//  TIM SO NHO NHAT
document.getElementById('btnSo_nho_nhat').onclick = 
function Min(){
    var min = 0;
    var max = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] < min){
            min = mang[i];
        }
        else{
            max = mang[i];
        }
    }
    document.getElementById('So_nho_nhat').innerHTML = min;
}

// TIM SO DUONG NHO NHAT
var soduong = [];
document.getElementById('btnDuong_nho_nhat').onclick = 
function So_duong_nho_nhat(){
    var am = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] > 0)
        {
            soduong.push(mang[i]);
        }
        else{
            am = mang[i];
        }
    }
    for(var i = 0; i < soduong.length; i++){
        for(var j = i+1; j < soduong.length; j++){
            if(soduong[i] > soduong[j]){
                soduong[i] = soduong[j];
            }
        }
    }
    if(soduong[0]){
        document.getElementById('Duong_nho_nhat').innerHTML = soduong[0];
    }
    else{
        document.getElementById('Duong_nho_nhat').innerHTML = 'Khong co so duong';
    }
    
}

// TIM SO CHAN CUOI CUNG
document.getElementById('btnChan_end').onclick = 
function Chan_end(){
    var chan = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] % 2 === 0 ){
            chan = mang[i];
        }
    }
    document.getElementById('Chan_end').innerHTML = chan;
}

// DOI CHO
document.getElementById('btnDoi_cho').onclick = 
function Doi_cho(){
    var vitri1 = Number(document.getElementById('vitri1').value);
    var vitri2 = Number(document.getElementById('vitri2').value);
    var bien_tam = 0;
    
    bien_tam = mang[vitri1];
    mang[vitri1] = mang[vitri2];
    mang[vitri2] = bien_tam;
        
    document.getElementById('Doi_cho').innerHTML = mang;
}

// SAP XEP TANG DAN
document.getElementById('btnTang_dan').onclick = 
function Sap_xep(){
    var bien_tam = 0;
    for(var i = 0; i < mang.length; i++){
        for(var j = i+1; j < mang.length; j++){
            if(mang[i] > mang[j]){
                bien_tam = mang[j];
                mang[j] = mang[i];
                mang[i] = bien_tam;
            }
        }
    }
    document.getElementById('Tang_dan').innerHTML = mang;
}

// TIM SO NGUYEN TO DAU TIEN 
document.getElementById('btnNguyen_dau').onclick = 
function Nguyen_dau(){
    var ketqua = '';

    for(var i = 0; i < mang.length; i++){
       var check = KT_SNT(mang[i]);
        if(check){
            ketqua += mang[i];
        }
    }
    document.getElementById('Nguyen_dau').innerHTML = ketqua[0];
}
function KT_SNT(number){
    var check = true;
    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            check = false;
            break;
        }
    }
    return check;
}

// DEM SO NGUYEN
var so_nguyen = [];
document.getElementById('btnThem_so').onclick = 
function(){
    var dulieu = Number(document.getElementById('songuyen').value);
    so_nguyen.push(dulieu);

    document.getElementById('Mang_so_nguyen').innerHTML = so_nguyen;
}

document.getElementById('btnSo_nguyen').onclick = 
function Dem_so_nguyen(){
    var dem = 0;
    var kodem = 0;
    for(var i = 0; i < so_nguyen.length; i++){
        if(Number.isInteger(so_nguyen[i])){
            dem++;
        }
        
    }
    document.getElementById('So_nguyen').innerHTML = dem;
}

// SO SANH SO LUONG AM VA DUONG
document.getElementById('btnDuong_am').onclick = 
function Dem_so_nguyen(){
    var duong = 0;
    var am = 0;
    for(var i = 0; i < mang.length; i++){
        if(mang[i] > 0){
            duong++;
        }
        else{
            am++;
        }
        
    }
    document.getElementById('Duong_am').innerHTML = 'Dương: ' + duong + ' & Âm: ' + am;
}
