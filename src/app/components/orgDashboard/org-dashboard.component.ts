import { Component, TemplateRef } from '@angular/core';
import { Organization, Project } from './data-models/org-data.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss']
})
export class OrgDashboardComponent {
  organizations: Organization[] = [
    {
      name: 'Shuttle Infra',
      sourceCode: 'AzureDevops',
      sourceCodeUrl: 'https://dev.azure.com/shuttleinfra/',
      projects: [
        {
          id: '1',
          name: 'ShuttleInfra',
          description: 'test project'
        }
      ]
    }
  ];
  organization: Organization = {
    name: '',
    sourceCode: '',
    sourceCodeUrl: '',
    projects: []
  }
  project: Project = {
    id: '1',
    name: '',
    description: ''
  }
  // TODO: Get the list of org's from DB and highlight first one.//
  selectedOrg: Organization = this.organizations[0];
  projectSearchResults: Project[] = [];
  showProjectCreationBlock = false;
  projectSearch = '';
  errorMessage = '';
  isOrgExists: boolean = false;
  isProjectExists: boolean = false;

  /// Modal decalrations  ///
  modalRef?: BsModalRef;
  modalConfig = {
    ignoreBackdropClick: true
  };
  constructor(private modalService: BsModalService) { }

  showOrgCreationModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  onCreateOrganization(orgForm: NgForm) {
    this.errorMessage = '';
    if (!orgForm.valid) { return;}
    this.isOrgExists = this.checkOrgExist(orgForm.value.name);
    if (!!this.isOrgExists) { this.setErrorMessage(`${orgForm.value.name} is already exists.`); } else {
      let newOrg = orgForm.value;
      newOrg.projects = [];
      this.organizations.push(newOrg);
      orgForm.resetForm();
    }
    //TODO: Implement functionality to save in db later//
  }

  checkOrgExist(orgName: string) {
    let orgExists = this.organizations.find(org => org.name == orgName);
    return !!orgExists ? true : false;
  }

  checkProjectExist(projectName: string) {
    let projectExists = this.selectedOrg?.projects?.find(project => project.name == projectName);
    return !!projectExists ? true : false;
  }

  onCreateProject(projectForm: NgForm) {
    this.errorMessage = '';
    if (!projectForm.valid) { return;}
    this.isProjectExists = this.checkProjectExist(projectForm.value.name);
    if (!!this.isProjectExists) { this.setErrorMessage(`${projectForm.value.name} is already exists.`); return }
    this.selectedOrg.projects?.push(projectForm.value);
    this.closeProjectCreationWindow();
    projectForm.resetForm();
    this.clearSearch();
    //TODO: Implement functionality to save in db later//
  }

  onSelectOrg(org: Organization) {
    this.selectedOrg = org;
    this.clearSearch();
  }

  clearSearch() {
    this.projectSearchResults = [];
    this.projectSearch = '';
  }

  showProjectCreationWindow() {
    this.showProjectCreationBlock = true;
  }

  closeProjectCreationWindow() {
    this.showProjectCreationBlock = false;
  }

  onEnterOrgName(orgName: string) {
    this.errorMessage == '';
    this.isOrgExists = this.checkOrgExist(orgName);
    if (!!this.isOrgExists) { this.setErrorMessage(`${orgName} is already exists.`); }
  }

  onEnterProjectName(projectName: string) {
    this.errorMessage == '';
    this.isProjectExists = this.checkProjectExist(projectName);
    if (!!this.isProjectExists) { this.setErrorMessage(`${projectName} is already exists.`); }
  }

  setErrorMessage(message: string) {
    this.errorMessage = `${message}`
  }

  // Push a search term into the observable stream.
  searchProjects(term: string): void {
    this.projectSearchResults = [];
    if (term.length > 0) {
      this.projectSearchResults = this.selectedOrg.projects?.filter(project => project.name.toLocaleLowerCase().indexOf(term.toLowerCase()) != -1) || [];
    }
  }
  onCancleProjectBtn(){
    this.closeProjectCreationWindow();
    this.isProjectExists = false;
  }
  onCancleOrgBtn(){
    this.modalRef?.hide();
    this.isOrgExists = false;
  }
}
