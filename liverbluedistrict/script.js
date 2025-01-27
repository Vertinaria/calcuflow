const H_popup = document.getElementById('H_popup')
const H = document.getElementById('H')
const close_H = document.getElementById('close_H')

H.addEventListener('click', () => {
	H_popup.style.display = 'flex';
});
close_H.addEventListener('click', () => {
	H_popup.style.display = 'none';
});

const next_He = document.getElementById('next_He')
next_He.addEventListener('click', () => {
	H_popup.style.display = 'none';
	He_popup.style.display = 'flex';
});

const He_popup = document.getElementById('He_popup')
const He = document.getElementById('He')
const close_He = document.getElementById('close_He')

He.addEventListener('click', () => {
	He_popup.style.display = 'flex';
});
close_He.addEventListener('click', () => {
	He_popup.style.display = 'none';
});

const prev_H = document.getElementById('prev_H')
const next_Li = document.getElementById('next_Li')
prev_H.addEventListener('click', () => {
	He_popup.style.display = 'none';
	H_popup.style.display = 'flex';
});
next_Li.addEventListener('click', () => {
	He_popup.style.display = 'none';
	Li_popup.style.display = 'flex';
});

const Li_popup = document.getElementById('Li_popup')
const Li = document.getElementById('Li')
const close_Li = document.getElementById('close_Li')

Li.addEventListener('click', () => {
	Li_popup.style.display = 'flex';
});
close_Li.addEventListener('click', () => {
	Li_popup.style.display = 'none';
});

const Be_popup = document.getElementById('Be_popup')
const Be = document.getElementById('Be')
const close_Be = document.getElementById('close_Be')

const B_popup = document.getElementById('B_popup')
const B = document.getElementById('B')
const close_B = document.getElementById('close_B')

const C_popup = document.getElementById('C_popup')
const C = document.getElementById('C')
const close_C = document.getElementById('close_C')

const N_popup = document.getElementById('N_popup')
const N = document.getElementById('N')
const close_N = document.getElementById('close_N')

const O_popup = document.getElementById('O_popup')
const O = document.getElementById('O')
const close_O = document.getElementById('close_O')

const F_popup = document.getElementById('F_popup')
const F = document.getElementById('F')
const close_F = document.getElementById('close_F')

const Ne_popup = document.getElementById('Ne_popup')
const Ne = document.getElementById('Ne')
const close_Ne = document.getElementById('close_Ne')

const Na_popup = document.getElementById('Na_popup')
const Na = document.getElementById('Na')
const close_Na = document.getElementById('close_Na')

const Mg_popup = document.getElementById('Mg_popup')
const Mg = document.getElementById('Mg')
const close_Mg = document.getElementById('close_Mg')

const Al_popup = document.getElementById('Al_popup')
const Al = document.getElementById('Al')
const close_Al = document.getElementById('close_Al')

const Si_popup = document.getElementById('Si_popup')
const Si = document.getElementById('Si')
const close_Si = document.getElementById('close_Si')

const P_popup = document.getElementById('P_popup')
const P = document.getElementById('P')
const close_P = document.getElementById('close_P')

const S_popup = document.getElementById('S_popup')
const S = document.getElementById('S')
const close_S = document.getElementById('close_S')

const Cl_popup = document.getElementById('Cl_popup')
const Cl = document.getElementById('Cl')
const close_Cl = document.getElementById('close_Cl')

const Ar_popup = document.getElementById('Ar_popup')
const Ar = document.getElementById('Ar')
const close_Ar = document.getElementById('close_Ar')

const K_popup = document.getElementById('K_popup')
const K = document.getElementById('K')
const close_K = document.getElementById('close_K')

const Ca_popup = document.getElementById('Ca_popup')
const Ca = document.getElementById('Ca')
const close_Ca = document.getElementById('close_Ca')

const Sc_popup = document.getElementById('Sc_popup')
const Sc = document.getElementById('Sc')
const close_Sc = document.getElementById('close_Sc')

const Ti_popup = document.getElementById('Ti_popup')
const Ti = document.getElementById('Ti')
const close_Ti = document.getElementById('close_Ti')

const V_popup = document.getElementById('V_popup')
const V = document.getElementById('V')
const close_V = document.getElementById('close_V')

const Cr_popup = document.getElementById('Cr_popup')
const Cr = document.getElementById('Cr')
const close_Cr = document.getElementById('close_Cr')

const Mn_popup = document.getElementById('Mn_popup')
const Mn = document.getElementById('Mn')
const close_Mn = document.getElementById('close_Mn')

const Fe_popup = document.getElementById('Fe_popup')
const Fe = document.getElementById('Fe')
const close_Fe = document.getElementById('close_Fe')

const Co_popup = document.getElementById('Co_popup')
const Co = document.getElementById('Co')
const close_Co = document.getElementById('close_Co')

const Ni_popup = document.getElementById('Ni_popup')
const Ni = document.getElementById('Ni')
const close_Ni = document.getElementById('close_Ni')

const Cu_popup = document.getElementById('Cu_popup')
const Cu = document.getElementById('Cu')
const close_Cu = document.getElementById('close_Cu')

const Zn_popup = document.getElementById('Zn_popup')
const Zn = document.getElementById('Zn')
const close_Zn = document.getElementById('close_Zn')

const Ga_popup = document.getElementById('Ga_popup')
const Ga = document.getElementById('Ga')
const close_Ga = document.getElementById('close_Ga')

const Ge_popup = document.getElementById('Ge_popup')
const Ge = document.getElementById('Ge')
const close_Ge = document.getElementById('close_Ge')

const As_popup = document.getElementById('As_popup')
const As = document.getElementById('As')
const close_As = document.getElementById('close_As')

const Se_popup = document.getElementById('Se_popup')
const Se = document.getElementById('Se')
const close_Se = document.getElementById('close_Se')

const Br_popup = document.getElementById('Br_popup')
const Br = document.getElementById('Br')
const close_Br = document.getElementById('close_Br')

const Kr_popup = document.getElementById('Kr_popup')
const Kr = document.getElementById('Kr')
const close_Kr = document.getElementById('close_Kr')

const Rb_popup = document.getElementById('Rb_popup')
const Rb = document.getElementById('Rb')
const close_Rb = document.getElementById('close_Rb')

const Sr_popup = document.getElementById('Sr_popup')
const Sr = document.getElementById('Sr')
const close_Sr = document.getElementById('close_Sr')

const Y_popup = document.getElementById('Y_popup')
const Y = document.getElementById('Y')
const close_Y = document.getElementById('close_Y')

const Zr_popup = document.getElementById('Zr_popup')
const Zr = document.getElementById('Zr')
const close_Zr = document.getElementById('close_Zr')

const prev_Y = document.getElementById('prev_Y')
const next_Nb = document.getElementById('next_Nb')
prev_Y.addEventListener('click', () => {
	Zr_popup.style.display = 'none';
	Y_popup.style.display = 'flex';
});
next_Nb.addEventListener('click', () => {
	Zr_popup.style.display = 'none';
	Nb_popup.style.display = 'flex';
});

const Nb_popup = document.getElementById('Nb_popup')
const Nb = document.getElementById('Nb')
const close_Nb = document.getElementById('close_Nb')

const prev_Zr = document.getElementById('prev_Zr')
const next_Mo = document.getElementById('next_Mo')
prev_Zr.addEventListener('click', () => {
	Nb_popup.style.display = 'none';
	Zr_popup.style.display = 'flex';
});
next_Mo.addEventListener('click', () => {
	Nb_popup.style.display = 'none';
	Mo_popup.style.display = 'flex';
});

const Mo_popup = document.getElementById('Mo_popup')
const Mo = document.getElementById('Mo')
const close_Mo = document.getElementById('close_Mo')

const prev_Nb = document.getElementById('prev_Nb')
const next_Tc = document.getElementById('next_Tc')
prev_Nb.addEventListener('click', () => {
	Mo_popup.style.display = 'none';
	Nb_popup.style.display = 'flex';
});
next_Tc.addEventListener('click', () => {
	Mo_popup.style.display = 'none';
	Tc_popup.style.display = 'flex';
});

const Tc_popup = document.getElementById('Tc_popup')
const Tc = document.getElementById('Tc')
const close_Tc = document.getElementById('close_Tc')

const prev_Mo = document.getElementById('prev_Mo')
const next_Ru = document.getElementById('next_Ru')
prev_Mo.addEventListener('click', () => {
	Tc_popup.style.display = 'none';
	Mo_popup.style.display = 'flex';
});
next_Ru.addEventListener('click', () => {
	Tc_popup.style.display = 'none';
	Ru_popup.style.display = 'flex';
});

const Ru_popup = document.getElementById('Ru_popup')
const Ru = document.getElementById('Ru')
const close_Ru = document.getElementById('close_Ru')

const prev_Tc = document.getElementById('prev_Tc')
const next_Rh = document.getElementById('next_Rh')
prev_Tc.addEventListener('click', () => {
	Ru_popup.style.display = 'none';
	Tc_popup.style.display = 'flex';
});
next_Rh.addEventListener('click', () => {
	Ru_popup.style.display = 'none';
	Rh_popup.style.display = 'flex';
});

const Rh_popup = document.getElementById('Rh_popup')
const Rh = document.getElementById('Rh')
const close_Rh = document.getElementById('close_Rh')

const prev_Ru = document.getElementById('prev_Ru')
const next_Pd = document.getElementById('next_Pd')
prev_Ru.addEventListener('click', () => {
	Rh_popup.style.display = 'none';
	Ru_popup.style.display = 'flex';
});
next_Pd.addEventListener('click', () => {
	Rh_popup.style.display = 'none';
	Pd_popup.style.display = 'flex';
});

const Pd_popup = document.getElementById('Pd_popup')
const Pd = document.getElementById('Pd')
const close_Pd = document.getElementById('close_Pd')

const prev_Rh = document.getElementById('prev_Rh')
const next_Ag = document.getElementById('next_Ag')
prev_Rh.addEventListener('click', () => {
	Pd_popup.style.display = 'none';
	Rh_popup.style.display = 'flex';
});
next_Ag.addEventListener('click', () => {
	Pd_popup.style.display = 'none';
	Ag_popup.style.display = 'flex';
});

const Ag_popup = document.getElementById('Ag_popup')
const Ag = document.getElementById('Ag')
const close_Ag = document.getElementById('close_Ag')

const prev_Pd = document.getElementById('prev_Pd')
const next_Cd = document.getElementById('next_Cd')
prev_Pd.addEventListener('click', () => {
	Ag_popup.style.display = 'none';
	Pd_popup.style.display = 'flex';
});
next_Cd.addEventListener('click', () => {
	Ag_popup.style.display = 'none';
	Cd_popup.style.display = 'flex';
});

const Cd_popup = document.getElementById('Cd_popup')
const Cd = document.getElementById('Cd')
const close_Cd = document.getElementById('close_Cd')

const prev_Ag = document.getElementById('prev_Ag')
const next_In = document.getElementById('next_In')
prev_Ag.addEventListener('click', () => {
	Cd_popup.style.display = 'none';
	Ag_popup.style.display = 'flex';
});
next_In.addEventListener('click', () => {
	Cd_popup.style.display = 'none';
	In_popup.style.display = 'flex';
});

const In_popup = document.getElementById('In_popup')
const In = document.getElementById('In')
const close_In = document.getElementById('close_In')

const prev_Cd = document.getElementById('prev_Cd')
const next_Sn = document.getElementById('next_Sn')
prev_Cd.addEventListener('click', () => {
	In_popup.style.display = 'none';
	Cd_popup.style.display = 'flex';
});
next_Sn.addEventListener('click', () => {
	In_popup.style.display = 'none';
	Sn_popup.style.display = 'flex';
});

const Sn_popup = document.getElementById('Sn_popup')
const Sn = document.getElementById('Sn')
const close_Sn = document.getElementById('close_Sn')

const prev_In = document.getElementById('prev_In')
const next_Sb = document.getElementById('next_Sb')
prev_In.addEventListener('click', () => {
	Sn_popup.style.display = 'none';
	In_popup.style.display = 'flex';
});
next_Sb.addEventListener('click', () => {
	Sn_popup.style.display = 'none';
	Sb_popup.style.display = 'flex';
});

const Sb_popup = document.getElementById('Sb_popup')
const Sb = document.getElementById('Sb')
const close_Sb = document.getElementById('close_Sb')

const prev_Sn = document.getElementById('prev_Sn')
const next_Te = document.getElementById('next_Te')
prev_Sn.addEventListener('click', () => {
	Sb_popup.style.display = 'none';
	Sn_popup.style.display = 'flex';
});
next_Te.addEventListener('click', () => {
	Sb_popup.style.display = 'none';
	Te_popup.style.display = 'flex';
});

const Te_popup = document.getElementById('Te_popup')
const Te = document.getElementById('Te')
const close_Te = document.getElementById('close_Te')

const prev_Sb = document.getElementById('prev_Sb')
const next_I = document.getElementById('next_I')
prev_Sb.addEventListener('click', () => {
	Te_popup.style.display = 'none';
	Sb_popup.style.display = 'flex';
});
next_I.addEventListener('click', () => {
	Te_popup.style.display = 'none';
	I_popup.style.display = 'flex';
});

const I_popup = document.getElementById('I_popup')
const I = document.getElementById('I')
const close_I = document.getElementById('close_I')

const prev_Te = document.getElementById('prev_Te')
const next_Xe = document.getElementById('next_Xe')
prev_Te.addEventListener('click', () => {
	I_popup.style.display = 'none';
	Te_popup.style.display = 'flex';
});
next_Xe.addEventListener('click', () => {
	I_popup.style.display = 'none';
	Xe_popup.style.display = 'flex';
});

const Xe_popup = document.getElementById('Xe_popup')
const Xe = document.getElementById('Xe')
const close_Xe = document.getElementById('close_Xe')

const prev_I = document.getElementById('prev_I')
const next_Cs = document.getElementById('next_Cs')
prev_I.addEventListener('click', () => {
	Xe_popup.style.display = 'none';
	I_popup.style.display = 'flex';
});
next_Cs.addEventListener('click', () => {
	Xe_popup.style.display = 'none';
	Cs_popup.style.display = 'flex';
});

const Cs_popup = document.getElementById('Cs_popup')
const Cs = document.getElementById('Cs')
const close_Cs = document.getElementById('close_Cs')

const prev_Xe = document.getElementById('prev_Xe')
const next_Ba = document.getElementById('next_Ba')
prev_Xe.addEventListener('click', () => {
	Cs_popup.style.display = 'none';
	Xe_popup.style.display = 'flex';
});
next_Ba.addEventListener('click', () => {
	Cs_popup.style.display = 'none';
	Ba_popup.style.display = 'flex';
});

const Ba_popup = document.getElementById('Ba_popup')
const Ba = document.getElementById('Ba')
const close_Ba = document.getElementById('close_Ba')

const prev_Cs = document.getElementById('prev_Cs')
const next_La = document.getElementById('next_La')
prev_Cs.addEventListener('click', () => {
	Ba_popup.style.display = 'none';
	Cs_popup.style.display = 'flex';
});
next_La.addEventListener('click', () => {
	Ba_popup.style.display = 'none';
	La_popup.style.display = 'flex';
});

const La_popup = document.getElementById('La_popup')
const La = document.getElementById('La')
const close_La = document.getElementById('close_La')

const Ce_popup = document.getElementById('Ce_popup')
const Ce = document.getElementById('Ce')
const close_Ce = document.getElementById('close_Ce')

const Pr_popup = document.getElementById('Pr_popup')
const Pr = document.getElementById('Pr')
const close_Pr = document.getElementById('close_Pr')

const Nd_popup = document.getElementById('Nd_popup')
const Nd = document.getElementById('Nd')
const close_Nd = document.getElementById('close_Nd')

const Pm_popup = document.getElementById('Pm_popup')
const Pm = document.getElementById('Pm')
const close_Pm = document.getElementById('close_Pm')

const Sm_popup = document.getElementById('Sm_popup')
const Sm = document.getElementById('Sm')
const close_Sm = document.getElementById('close_Sm')

const Eu_popup = document.getElementById('Eu_popup')
const Eu = document.getElementById('Eu')
const close_Eu = document.getElementById('close_Eu')

const Gd_popup = document.getElementById('Gd_popup')
const Gd = document.getElementById('Gd')
const close_Gd = document.getElementById('close_Gd')

const Tb_popup = document.getElementById('Tb_popup')
const Tb = document.getElementById('Tb')
const close_Tb = document.getElementById('close_Tb')

Tb.addEventListener('click', () => {
	Tb_popup.style.display = 'flex';
});
close_Tb.addEventListener('click', () => {
	Tb_popup.style.display = 'none';
});

const Dy_popup = document.getElementById('Dy_popup')
const Dy = document.getElementById('Dy')
const close_Dy = document.getElementById('close_Dy')

Dy.addEventListener('click', () => {
	Dy_popup.style.display = 'flex';
});
close_Dy.addEventListener('click', () => {
	Dy_popup.style.display = 'none';
});

Be.addEventListener('click', () => {
	Be_popup.style.display = 'flex';
});
close_Be.addEventListener('click', () => {
	Be_popup.style.display = 'none';
});
B.addEventListener('click', () => {
	B_popup.style.display = 'flex';
});
close_B.addEventListener('click', () => {
	B_popup.style.display = 'none';
});
C.addEventListener('click', () => {
	C_popup.style.display = 'flex';
});
close_C.addEventListener('click', () => {
	C_popup.style.display = 'none';
});
N.addEventListener('click', () => {
	N_popup.style.display = 'flex';
});
close_N.addEventListener('click', () => {
	N_popup.style.display = 'none';
});
O.addEventListener('click', () => {
	O_popup.style.display = 'flex';
});
close_O.addEventListener('click', () => {
	O_popup.style.display = 'none';
});
F.addEventListener('click', () => {
	F_popup.style.display = 'flex';
});
close_F.addEventListener('click', () => {
	F_popup.style.display = 'none';
});
Ne.addEventListener('click', () => {
	Ne_popup.style.display = 'flex';
});
close_Ne.addEventListener('click', () => {
	Ne_popup.style.display = 'none';
});
Na.addEventListener('click', () => {
	Na_popup.style.display = 'flex';
});
close_Na.addEventListener('click', () => {
	Na_popup.style.display = 'none';
});
Mg.addEventListener('click', () => {
	Mg_popup.style.display = 'flex';
});
close_Mg.addEventListener('click', () => {
	Mg_popup.style.display = 'none';
});
Al.addEventListener('click', () => {
	Al_popup.style.display = 'flex';
});
close_Al.addEventListener('click', () => {
	Al_popup.style.display = 'none';
});
Si.addEventListener('click', () => {
	Si_popup.style.display = 'flex';
});
close_Si.addEventListener('click', () => {
	Si_popup.style.display = 'none';
});
P.addEventListener('click', () => {
	P_popup.style.display = 'flex';
});
close_P.addEventListener('click', () => {
	P_popup.style.display = 'none';
});
S.addEventListener('click', () => {
	S_popup.style.display = 'flex';
});
close_S.addEventListener('click', () => {
	S_popup.style.display = 'none';
});
Cl.addEventListener('click', () => {
	Cl_popup.style.display = 'flex';
});
close_Cl.addEventListener('click', () => {
	Cl_popup.style.display = 'none';
});
Ar.addEventListener('click', () => {
	Ar_popup.style.display = 'flex';
});
close_Ar.addEventListener('click', () => {
	Ar_popup.style.display = 'none';
});
K.addEventListener('click', () => {
	K_popup.style.display = 'flex';
});
close_K.addEventListener('click', () => {
	K_popup.style.display = 'none';
});
Ca.addEventListener('click', () => {
	Ca_popup.style.display = 'flex';
});
close_Ca.addEventListener('click', () => {
	Ca_popup.style.display = 'none';
});
Sc.addEventListener('click', () => {
	Sc_popup.style.display = 'flex';
});
close_Sc.addEventListener('click', () => {
	Sc_popup.style.display = 'none';
});
Ti.addEventListener('click', () => {
	Ti_popup.style.display = 'flex';
});
close_Ti.addEventListener('click', () => {
	Ti_popup.style.display = 'none';
});
V.addEventListener('click', () => {
	V_popup.style.display = 'flex';
});
close_V.addEventListener('click', () => {
	V_popup.style.display = 'none';
});
Cr.addEventListener('click', () => {
	Cr_popup.style.display = 'flex';
});
close_Cr.addEventListener('click', () => {
	Cr_popup.style.display = 'none';
});
Mn.addEventListener('click', () => {
	Mn_popup.style.display = 'flex';
});
close_Mn.addEventListener('click', () => {
	Mn_popup.style.display = 'none';
});
Fe.addEventListener('click', () => {
	Fe_popup.style.display = 'flex';
});
close_Fe.addEventListener('click', () => {
	Fe_popup.style.display = 'none';
});
Co.addEventListener('click', () => {
	Co_popup.style.display = 'flex';
});
close_Co.addEventListener('click', () => {
	Co_popup.style.display = 'none';
});
Ni.addEventListener('click', () => {
	Ni_popup.style.display = 'flex';
});
close_Ni.addEventListener('click', () => {
	Ni_popup.style.display = 'none';
});
Cu.addEventListener('click', () => {
	Cu_popup.style.display = 'flex';
});
close_Cu.addEventListener('click', () => {
	Cu_popup.style.display = 'none';
});
Zn.addEventListener('click', () => {
	Zn_popup.style.display = 'flex';
});
close_Zn.addEventListener('click', () => {
	Zn_popup.style.display = 'none';
});
Ga.addEventListener('click', () => {
	Ga_popup.style.display = 'flex';
});
close_Ga.addEventListener('click', () => {
	Ga_popup.style.display = 'none';
});
Ge.addEventListener('click', () => {
	Ge_popup.style.display = 'flex';
});
close_Ge.addEventListener('click', () => {
	Ge_popup.style.display = 'none';
});
As.addEventListener('click', () => {
	As_popup.style.display = 'flex';
});
close_As.addEventListener('click', () => {
	As_popup.style.display = 'none';
});
Se.addEventListener('click', () => {
	Se_popup.style.display = 'flex';
});
close_Se.addEventListener('click', () => {
	Se_popup.style.display = 'none';
});
Br.addEventListener('click', () => {
	Br_popup.style.display = 'flex';
});
close_Br.addEventListener('click', () => {
	Br_popup.style.display = 'none';
});
Kr.addEventListener('click', () => {
	Kr_popup.style.display = 'flex';
});
close_Kr.addEventListener('click', () => {
	Kr_popup.style.display = 'none';
});
Rb.addEventListener('click', () => {
	Rb_popup.style.display = 'flex';
});
close_Rb.addEventListener('click', () => {
	Rb_popup.style.display = 'none';
});
Sr.addEventListener('click', () => {
	Sr_popup.style.display = 'flex';
});
close_Sr.addEventListener('click', () => {
	Sr_popup.style.display = 'none';
});
Y.addEventListener('click', () => {
	Y_popup.style.display = 'flex';
});
close_Y.addEventListener('click', () => {
	Y_popup.style.display = 'none';
});
Zr.addEventListener('click', () => {
	Zr_popup.style.display = 'flex';
});
close_Zr.addEventListener('click', () => {
	Zr_popup.style.display = 'none';
});
Nb.addEventListener('click', () => {
	Nb_popup.style.display = 'flex';
});
close_Nb.addEventListener('click', () => {
	Nb_popup.style.display = 'none';
});
Mo.addEventListener('click', () => {
	Mo_popup.style.display = 'flex';
});
close_Mo.addEventListener('click', () => {
	Mo_popup.style.display = 'none';
});
Tc.addEventListener('click', () => {
	Tc_popup.style.display = 'flex';
});
close_Tc.addEventListener('click', () => {
	Tc_popup.style.display = 'none';
});
Ru.addEventListener('click', () => {
	Ru_popup.style.display = 'flex';
});
close_Ru.addEventListener('click', () => {
	Ru_popup.style.display = 'none';
});
Rh.addEventListener('click', () => {
	Rh_popup.style.display = 'flex';
});
close_Rh.addEventListener('click', () => {
	Rh_popup.style.display = 'none';
});
Pd.addEventListener('click', () => {
	Pd_popup.style.display = 'flex';
});
close_Pd.addEventListener('click', () => {
	Pd_popup.style.display = 'none';
});
Ag.addEventListener('click', () => {
	Ag_popup.style.display = 'flex';
});
close_Ag.addEventListener('click', () => {
	Ag_popup.style.display = 'none';
});
Cd.addEventListener('click', () => {
	Cd_popup.style.display = 'flex';
});
close_Cd.addEventListener('click', () => {
	Cd_popup.style.display = 'none';
});
In.addEventListener('click', () => {
	In_popup.style.display = 'flex';
});
close_In.addEventListener('click', () => {
	In_popup.style.display = 'none';
});
Sn.addEventListener('click', () => {
	Sn_popup.style.display = 'flex';
});
close_Sn.addEventListener('click', () => {
	Sn_popup.style.display = 'none';
});
Sb.addEventListener('click', () => {
	Sb_popup.style.display = 'flex';
});
close_Sb.addEventListener('click', () => {
	Sb_popup.style.display = 'none';
});
Te.addEventListener('click', () => {
	Te_popup.style.display = 'flex';
});
close_Te.addEventListener('click', () => {
	Te_popup.style.display = 'none';
});
I.addEventListener('click', () => {
	I_popup.style.display = 'flex';
});
close_I.addEventListener('click', () => {
	I_popup.style.display = 'none';
});
Xe.addEventListener('click', () => {
	Xe_popup.style.display = 'flex';
});
close_Xe.addEventListener('click', () => {
	Xe_popup.style.display = 'none';
});
Cs.addEventListener('click', () => {
	Cs_popup.style.display = 'flex';
});
close_Cs.addEventListener('click', () => {
	Cs_popup.style.display = 'none';
});
Ba.addEventListener('click', () => {
	Ba_popup.style.display = 'flex';
});
close_Ba.addEventListener('click', () => {
	Ba_popup.style.display = 'none';
});
La.addEventListener('click', () => {
	La_popup.style.display = 'flex';
});
close_La.addEventListener('click', () => {
	La_popup.style.display = 'none';
});
Ce.addEventListener('click', () => {
	Ce_popup.style.display = 'flex';
});
close_Ce.addEventListener('click', () => {
	Ce_popup.style.display = 'none';
});
Pr.addEventListener('click', () => {
	Pr_popup.style.display = 'flex';
});
close_Pr.addEventListener('click', () => {
	Pr_popup.style.display = 'none';
});
Nd.addEventListener('click', () => {
	Nd_popup.style.display = 'flex';
});
close_Nd.addEventListener('click', () => {
	Nd_popup.style.display = 'none';
});
Pm.addEventListener('click', () => {
	Pm_popup.style.display = 'flex';
});
close_Pm.addEventListener('click', () => {
	Pm_popup.style.display = 'none';
});
Sm.addEventListener('click', () => {
	Sm_popup.style.display = 'flex';
});
close_Sm.addEventListener('click', () => {
	Sm_popup.style.display = 'none';
});
Eu.addEventListener('click', () => {
	Eu_popup.style.display = 'flex';
});
close_Eu.addEventListener('click', () => {
	Eu_popup.style.display = 'none';
});

Gd.addEventListener('click', () => {
	Gd_popup.style.display = 'flex';
});
close_Gd.addEventListener('click', () => {
	Gd_popup.style.display = 'none';
});

const prev_He = document.getElementById('prev_He')
const next_Be = document.getElementById('next_Be')
prev_He.addEventListener('click', () => {
	Li_popup.style.display = 'none';
	He_popup.style.display = 'flex';
});
next_Be.addEventListener('click', () => {
	Li_popup.style.display = 'none';
	Be_popup.style.display = 'flex';
});

const prev_Li = document.getElementById('prev_Li')
const next_B = document.getElementById('next_B')
prev_Li.addEventListener('click', () => {
	Be_popup.style.display = 'none';
	Li_popup.style.display = 'flex';
});
next_B.addEventListener('click', () => {
	Be_popup.style.display = 'none';
	B_popup.style.display = 'flex';
});

const prev_Be = document.getElementById('prev_Be')
const next_C = document.getElementById('next_C')
prev_Be.addEventListener('click', () => {
	B_popup.style.display = 'none';
	Be_popup.style.display = 'flex';
});
next_C.addEventListener('click', () => {
	B_popup.style.display = 'none';
	C_popup.style.display = 'flex';
});

const prev_B = document.getElementById('prev_B')
const next_N = document.getElementById('next_N')
prev_B.addEventListener('click', () => {
	C_popup.style.display = 'none';
	B_popup.style.display = 'flex';
});
next_N.addEventListener('click', () => {
	C_popup.style.display = 'none';
	N_popup.style.display = 'flex';
});

const prev_C = document.getElementById('prev_C')
const next_O = document.getElementById('next_O')
prev_C.addEventListener('click', () => {
	N_popup.style.display = 'none';
	C_popup.style.display = 'flex';
});
next_O.addEventListener('click', () => {
	N_popup.style.display = 'none';
	O_popup.style.display = 'flex';
});

const prev_N = document.getElementById('prev_N')
const next_F = document.getElementById('next_F')
prev_N.addEventListener('click', () => {
	O_popup.style.display = 'none';
	N_popup.style.display = 'flex';
});
next_F.addEventListener('click', () => {
	O_popup.style.display = 'none';
	F_popup.style.display = 'flex';
});

const prev_O = document.getElementById('prev_O')
const next_Ne = document.getElementById('next_Ne')
prev_O.addEventListener('click', () => {
	F_popup.style.display = 'none';
	O_popup.style.display = 'flex';
});
next_Ne.addEventListener('click', () => {
	F_popup.style.display = 'none';
	Ne_popup.style.display = 'flex';
});

const prev_F = document.getElementById('prev_F')
const next_Na = document.getElementById('next_Na')
prev_F.addEventListener('click', () => {
	Ne_popup.style.display = 'none';
	F_popup.style.display = 'flex';
});
next_Na.addEventListener('click', () => {
	Ne_popup.style.display = 'none';
	Na_popup.style.display = 'flex';
});

const prev_Ne = document.getElementById('prev_Ne')
const next_Mg = document.getElementById('next_Mg')
prev_Ne.addEventListener('click', () => {
	Na_popup.style.display = 'none';
	Ne_popup.style.display = 'flex';
});
next_Mg.addEventListener('click', () => {
	Na_popup.style.display = 'none';
	Mg_popup.style.display = 'flex';
});

const prev_Na = document.getElementById('prev_Na')
const next_Al = document.getElementById('next_Al')
prev_Na.addEventListener('click', () => {
	Mg_popup.style.display = 'none';
	Na_popup.style.display = 'flex';
});
next_Al.addEventListener('click', () => {
	Mg_popup.style.display = 'none';
	Al_popup.style.display = 'flex';
});

const prev_Mg = document.getElementById('prev_Mg')
const next_Si = document.getElementById('next_Si')
prev_Mg.addEventListener('click', () => {
	Al_popup.style.display = 'none';
	Mg_popup.style.display = 'flex';
});
next_Si.addEventListener('click', () => {
	Al_popup.style.display = 'none';
	Si_popup.style.display = 'flex';
});

const prev_Al = document.getElementById('prev_Al')
const next_P = document.getElementById('next_P')
prev_Al.addEventListener('click', () => {
	Si_popup.style.display = 'none';
	Al_popup.style.display = 'flex';
});
next_P.addEventListener('click', () => {
	Si_popup.style.display = 'none';
	P_popup.style.display = 'flex';
});

const prev_Si = document.getElementById('prev_Si')
const next_S = document.getElementById('next_S')
prev_Si.addEventListener('click', () => {
	P_popup.style.display = 'none';
	Si_popup.style.display = 'flex';
});
next_S.addEventListener('click', () => {
	P_popup.style.display = 'none';
	S_popup.style.display = 'flex';
});

const prev_P = document.getElementById('prev_P')
const next_Cl = document.getElementById('next_Cl')
prev_P.addEventListener('click', () => {
	S_popup.style.display = 'none';
	P_popup.style.display = 'flex';
});
next_Cl.addEventListener('click', () => {
	S_popup.style.display = 'none';
	Cl_popup.style.display = 'flex';
});

const prev_S = document.getElementById('prev_S')
const next_Ar = document.getElementById('next_Ar')
prev_S.addEventListener('click', () => {
	Cl_popup.style.display = 'none';
	S_popup.style.display = 'flex';
});
next_Ar.addEventListener('click', () => {
	Cl_popup.style.display = 'none';
	Ar_popup.style.display = 'flex';
});

const prev_Cl = document.getElementById('prev_Cl')
const next_K = document.getElementById('next_K')
prev_Cl.addEventListener('click', () => {
	Ar_popup.style.display = 'none';
	Cl_popup.style.display = 'flex';
});
next_K.addEventListener('click', () => {
	Ar_popup.style.display = 'none';
	K_popup.style.display = 'flex';
});

const prev_Ar = document.getElementById('prev_Ar')
const next_Ca = document.getElementById('next_Ca')
prev_Ar.addEventListener('click', () => {
	K_popup.style.display = 'none';
	Ar_popup.style.display = 'flex';
});
next_Ca.addEventListener('click', () => {
	K_popup.style.display = 'none';
	Ca_popup.style.display = 'flex';
});

const prev_K = document.getElementById('prev_K')
const next_Sc = document.getElementById('next_Sc')
prev_K.addEventListener('click', () => {
	Ca_popup.style.display = 'none';
	K_popup.style.display = 'flex';
});
next_Sc.addEventListener('click', () => {
	Ca_popup.style.display = 'none';
	Sc_popup.style.display = 'flex';
});

const prev_Ca = document.getElementById('prev_Ca')
const next_Ti = document.getElementById('next_Ti')
prev_Ca.addEventListener('click', () => {
	Sc_popup.style.display = 'none';
	Ca_popup.style.display = 'flex';
});
next_Ti.addEventListener('click', () => {
	Sc_popup.style.display = 'none';
	Ti_popup.style.display = 'flex';
});

const prev_Sc = document.getElementById('prev_Sc')
const next_V = document.getElementById('next_V')
prev_Sc.addEventListener('click', () => {
	Ti_popup.style.display = 'none';
	Sc_popup.style.display = 'flex';
});
next_V.addEventListener('click', () => {
	Ti_popup.style.display = 'none';
	V_popup.style.display = 'flex';
});

const prev_Ti = document.getElementById('prev_Ti')
const next_Cr = document.getElementById('next_Cr')
prev_Ti.addEventListener('click', () => {
	V_popup.style.display = 'none';
	Ti_popup.style.display = 'flex';
});
next_Cr.addEventListener('click', () => {
	V_popup.style.display = 'none';
	Cr_popup.style.display = 'flex';
});

const prev_V = document.getElementById('prev_V')
const next_Mn = document.getElementById('next_Mn')
prev_V.addEventListener('click', () => {
	Cr_popup.style.display = 'none';
	V_popup.style.display = 'flex';
});
next_Mn.addEventListener('click', () => {
	Cr_popup.style.display = 'none';
	Mn_popup.style.display = 'flex';
});

const prev_Cr = document.getElementById('prev_Cr')
const next_Fe = document.getElementById('next_Fe')
prev_Cr.addEventListener('click', () => {
	Mn_popup.style.display = 'none';
	Cr_popup.style.display = 'flex';
});
next_Fe.addEventListener('click', () => {
	Mn_popup.style.display = 'none';
	Fe_popup.style.display = 'flex';
});

const prev_Mn = document.getElementById('prev_Mn')
const next_Co = document.getElementById('next_Co')
prev_Mn.addEventListener('click', () => {
	Fe_popup.style.display = 'none';
	Mn_popup.style.display = 'flex';
});
next_Co.addEventListener('click', () => {
	Fe_popup.style.display = 'none';
	Co_popup.style.display = 'flex';
});

const prev_Fe = document.getElementById('prev_Fe')
const next_Ni = document.getElementById('next_Ni')
prev_Fe.addEventListener('click', () => {
	Co_popup.style.display = 'none';
	Fe_popup.style.display = 'flex';
});
next_Ni.addEventListener('click', () => {
	Co_popup.style.display = 'none';
	Ni_popup.style.display = 'flex';
});

const prev_Co = document.getElementById('prev_Co')
const next_Cu = document.getElementById('next_Cu')
prev_Co.addEventListener('click', () => {
	Ni_popup.style.display = 'none';
	Co_popup.style.display = 'flex';
});
next_Cu.addEventListener('click', () => {
	Ni_popup.style.display = 'none';
	Cu_popup.style.display = 'flex';
});

const prev_Ni = document.getElementById('prev_Ni')
const next_Zn = document.getElementById('next_Zn')
prev_Ni.addEventListener('click', () => {
	Cu_popup.style.display = 'none';
	Ni_popup.style.display = 'flex';
});
next_Zn.addEventListener('click', () => {
	Cu_popup.style.display = 'none';
	Zn_popup.style.display = 'flex';
});

const prev_Cu = document.getElementById('prev_Cu')
const next_Ga = document.getElementById('next_Ga')
prev_Cu.addEventListener('click', () => {
	Zn_popup.style.display = 'none';
	Cu_popup.style.display = 'flex';
});
next_Ga.addEventListener('click', () => {
	Zn_popup.style.display = 'none';
	Ga_popup.style.display = 'flex';
});

const prev_Zn = document.getElementById('prev_Zn')
const next_Ge = document.getElementById('next_Ge')
prev_Zn.addEventListener('click', () => {
	Ga_popup.style.display = 'none';
	Zn_popup.style.display = 'flex';
});
next_Ge.addEventListener('click', () => {
	Ga_popup.style.display = 'none';
	Ge_popup.style.display = 'flex';
});

const prev_Ga = document.getElementById('prev_Ga')
const next_As = document.getElementById('next_As')
prev_Ga.addEventListener('click', () => {
	Ge_popup.style.display = 'none';
	Ga_popup.style.display = 'flex';
});
next_As.addEventListener('click', () => {
	Ge_popup.style.display = 'none';
	As_popup.style.display = 'flex';
});

const prev_Ge = document.getElementById('prev_Ge')
const next_Se = document.getElementById('next_Se')
prev_Ge.addEventListener('click', () => {
	As_popup.style.display = 'none';
	Ge_popup.style.display = 'flex';
});
next_Se.addEventListener('click', () => {
	As_popup.style.display = 'none';
	Se_popup.style.display = 'flex';
});

const prev_As = document.getElementById('prev_As')
const next_Br = document.getElementById('next_Br')
prev_As.addEventListener('click', () => {
	Se_popup.style.display = 'none';
	As_popup.style.display = 'flex';
});
next_Br.addEventListener('click', () => {
	Se_popup.style.display = 'none';
	Br_popup.style.display = 'flex';
});

const prev_Se = document.getElementById('prev_Se')
const next_Kr = document.getElementById('next_Kr')
prev_Se.addEventListener('click', () => {
	Br_popup.style.display = 'none';
	Se_popup.style.display = 'flex';
});
next_Kr.addEventListener('click', () => {
	Br_popup.style.display = 'none';
	Kr_popup.style.display = 'flex';
});

const prev_Br = document.getElementById('prev_Br')
const next_Rb = document.getElementById('next_Rb')
prev_Br.addEventListener('click', () => {
	Kr_popup.style.display = 'none';
	Br_popup.style.display = 'flex';
});
next_Rb.addEventListener('click', () => {
	Kr_popup.style.display = 'none';
	Rb_popup.style.display = 'flex';
});

const prev_Kr = document.getElementById('prev_Kr')
const next_Sr = document.getElementById('next_Sr')
prev_Kr.addEventListener('click', () => {
	Rb_popup.style.display = 'none';
	Kr_popup.style.display = 'flex';
});
next_Sr.addEventListener('click', () => {
	Rb_popup.style.display = 'none';
	Sr_popup.style.display = 'flex';
});

const prev_Rb = document.getElementById('prev_Rb')
const next_Y = document.getElementById('next_Y')
prev_Rb.addEventListener('click', () => {
	Sr_popup.style.display = 'none';
	Rb_popup.style.display = 'flex';
});
next_Y.addEventListener('click', () => {
	Sr_popup.style.display = 'none';
	Y_popup.style.display = 'flex';
});

const prev_Sr = document.getElementById('prev_Sr')
const next_Zr = document.getElementById('next_Zr')
prev_Sr.addEventListener('click', () => {
	Y_popup.style.display = 'none';
	Sr_popup.style.display = 'flex';
});
next_Zr.addEventListener('click', () => {
	Y_popup.style.display = 'none';
	Zr_popup.style.display = 'flex';
});
