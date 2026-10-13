import{S as e}from"./index-nx_FLI_E.js";const r="fogVertexDeclaration",s=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=s);const o="fogVertex",d=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;e.IncludesShadersStore[o]||(e.IncludesShadersStore[o]=d);
