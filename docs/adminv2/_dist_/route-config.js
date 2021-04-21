import { AuthenticationSection } from "./authentication/AuthenticationSection.js";
import { ClientScopeForm } from "./client-scopes/form/ClientScopeForm.js";
import { ClientScopesSection } from "./client-scopes/ClientScopesSection.js";
import { DashboardSection } from "./dashboard/Dashboard.js";
import { NewClientForm } from "./clients/add/NewClientForm.js";
import { ClientsSection } from "./clients/ClientsSection.js";
import { ImportForm } from "./clients/import/ImportForm.js";
import { EventsSection } from "./events/EventsSection.js";
import { GroupsSection } from "./groups/GroupsSection.js";
import { IdentityProvidersSection } from "./identity-providers/IdentityProvidersSection.js";
import { PageNotFoundSection } from "./PageNotFoundSection.js";
import { RealmRolesSection } from "./realm-roles/RealmRolesSection.js";
import { RealmSettingsSection } from "./realm-settings/RealmSettingsSection.js";
import { NewRealmForm } from "./realm/add/NewRealmForm.js";
import { SessionsSection } from "./sessions/SessionsSection.js";
import { UserFederationSection } from "./user-federation/UserFederationSection.js";
import { UsersSection } from "./user/UsersSection.js";
import { MappingDetails } from "./client-scopes/details/MappingDetails.js";
import { ClientDetails } from "./clients/ClientDetails.js";
import { UsersTabs } from "./user/UsersTabs.js";
import { UserGroups } from "./user/UserGroups.js";
import { UserFederationKerberosSettings } from "./user-federation/UserFederationKerberosSettings.js";
import { UserFederationLdapSettings } from "./user-federation/UserFederationLdapSettings.js";
import { RoleMappingForm } from "./client-scopes/add/RoleMappingForm.js";
import { RealmRoleTabs } from "./realm-roles/RealmRoleTabs.js";
import { SearchGroups } from "./groups/SearchGroups.js";
import { CreateInitialAccessToken } from "./clients/initial-access/CreateInitialAccessToken.js";
export const routes = t => [{
  path: "/:realm/add-realm",
  component: NewRealmForm,
  breadcrumb: t("realm:createRealm"),
  access: "manage-realm"
}, {
  path: "/:realm/clients/add-client",
  component: NewClientForm,
  breadcrumb: t("clients:createClient"),
  access: "manage-clients"
}, {
  path: "/:realm/clients/import-client",
  component: ImportForm,
  breadcrumb: t("clients:importClient"),
  access: "manage-clients"
}, {
  path: "/:realm/clients/:tab?",
  component: ClientsSection,
  breadcrumb: t("clients:clientList"),
  access: "query-clients"
}, {
  path: "/:realm/clients/initialAccessToken/create",
  component: CreateInitialAccessToken,
  breadcrumb: t("clients:createToken"),
  access: "manage-clients"
}, {
  path: "/:realm/clients/:clientId/roles/add-role",
  component: RealmRoleTabs,
  breadcrumb: t("roles:createRole"),
  access: "manage-realm"
}, {
  path: "/:realm/clients/:clientId/roles/:id/:tab?",
  component: RealmRoleTabs,
  breadcrumb: t("roles:roleDetails"),
  access: "view-realm"
}, {
  path: "/:realm/clients/:clientId/:tab",
  component: ClientDetails,
  breadcrumb: t("clients:clientSettings"),
  access: "view-clients"
}, {
  path: "/:realm/client-scopes/new",
  component: ClientScopeForm,
  breadcrumb: t("client-scopes:createClientScope"),
  access: "manage-clients"
}, {
  path: "/:realm/client-scopes/:id/:tab/oidc-role-name-mapper",
  component: RoleMappingForm,
  breadcrumb: t("client-scopes:mappingDetails"),
  access: "view-clients"
}, {
  path: "/:realm/client-scopes/:id/:tab/:mapperId",
  component: MappingDetails,
  breadcrumb: t("client-scopes:mappingDetails"),
  access: "view-clients"
}, {
  path: "/:realm/client-scopes/:id/:tab",
  component: ClientScopeForm,
  breadcrumb: t("client-scopes:clientScopeDetails"),
  access: "view-clients"
}, {
  path: "/:realm/client-scopes",
  component: ClientScopesSection,
  breadcrumb: t("client-scopes:clientScopeList"),
  access: "view-clients"
}, {
  path: "/:realm/roles",
  component: RealmRolesSection,
  breadcrumb: t("roles:roleList"),
  access: "view-realm"
}, {
  path: "/:realm/roles/add-role",
  component: RealmRoleTabs,
  breadcrumb: t("roles:createRole"),
  access: "manage-realm"
}, {
  path: "/:realm/roles/:id/:tab?",
  component: RealmRoleTabs,
  breadcrumb: t("roles:roleDetails"),
  access: "view-realm"
}, {
  path: "/:realm/users",
  component: UsersSection,
  breadcrumb: t("users:title"),
  access: "query-users"
}, {
  path: "/:realm/users/add-user",
  component: UsersTabs,
  breadcrumb: t("users:createUser"),
  access: "manage-users"
}, {
  path: "/:realm/users/:id",
  component: UserGroups,
  breadcrumb: t("users:userDetails"),
  access: "manage-users"
}, {
  path: "/:realm/users/:id/:tab",
  component: UsersTabs,
  breadcrumb: t("users:userDetails"),
  access: "manage-users"
}, {
  path: "/:realm/sessions",
  component: SessionsSection,
  breadcrumb: t("sessions:title"),
  access: "view-realm"
}, {
  path: "/:realm/events/:tab?",
  component: EventsSection,
  breadcrumb: t("events:title"),
  access: "view-events"
}, {
  path: "/:realm/realm-settings",
  component: RealmSettingsSection,
  breadcrumb: t("realmSettings"),
  access: "view-realm"
}, {
  path: "/:realm/authentication",
  component: AuthenticationSection,
  breadcrumb: t("authentication"),
  access: "view-realm"
}, {
  path: "/:realm/identity-providers",
  component: IdentityProvidersSection,
  breadcrumb: t("identityProviders"),
  access: "view-identity-providers"
}, {
  path: "/:realm/user-federation",
  component: UserFederationSection,
  breadcrumb: t("userFederation"),
  access: "view-realm"
}, {
  path: "/:realm/user-federation/kerberos",
  component: UserFederationSection,
  breadcrumb: null,
  access: "view-realm"
}, {
  path: "/:realm/user-federation/ldap",
  component: UserFederationSection,
  breadcrumb: null,
  access: "view-realm"
}, {
  path: "/:realm/user-federation/kerberos/:id",
  component: UserFederationKerberosSettings,
  breadcrumb: t("common:settings"),
  access: "view-realm"
}, {
  path: "/:realm/user-federation/kerberos/new",
  component: UserFederationKerberosSettings,
  breadcrumb: t("common:settings"),
  access: "view-realm"
}, {
  path: "/:realm/user-federation/ldap/:id",
  component: UserFederationLdapSettings,
  breadcrumb: t("common:settings"),
  access: "view-realm"
}, {
  path: "/:realm/user-federation/ldap/new",
  component: UserFederationLdapSettings,
  breadcrumb: t("common:settings"),
  access: "view-realm"
}, {
  path: "/:realm/",
  component: DashboardSection,
  breadcrumb: t("common:home"),
  access: "anyone"
}, {
  path: "/:realm/groups/search",
  component: SearchGroups,
  breadcrumb: t("groups:searchGroups"),
  access: "query-groups"
}, {
  path: "/:realm/groups",
  component: GroupsSection,
  breadcrumb: null,
  matchOptions: {
    exact: false
  },
  access: "query-groups"
}, {
  path: "/",
  component: DashboardSection,
  breadcrumb: t("common:home"),
  access: "anyone"
}, {
  path: "*",
  component: PageNotFoundSection,
  breadcrumb: null,
  access: "anyone"
}];