function checkUrl(){
  const input=document.getElementById('url');
  const result=document.getElementById('result');
  const value=input.value.trim();
  if(!value){
    result.className='result danger';
    result.textContent='Please enter a URL first.';
    return;
  }
  let url;
  try{
    url=new URL(value.startsWith('http') ? value : 'https://' + value);
  }catch(e){
    result.className='result danger';
    result.textContent='Invalid URL format. Please enter a valid website address.';
    return;
  }

  // Demo-only heuristic. Replace this with your Random Forest API.
  const suspicious=['login-verify','secure-update','account-alert','free-gift','verify-account'];
  const suspiciousPattern=suspicious.some(x=>url.hostname.toLowerCase().includes(x));
  const oddChars=(url.hostname.match(/[-_]/g)||[]).length>3;
  const isDemoPhishing=suspiciousPattern || oddChars;

  result.className='result ' + (isDemoPhishing ? 'danger' : 'safe');
  result.textContent=isDemoPhishing
    ? '⚠ Potentially suspicious URL detected. Do not enter sensitive information.'
    : '✓ No obvious phishing indicators detected by this demo checker. Still verify the domain before trusting it.';
}